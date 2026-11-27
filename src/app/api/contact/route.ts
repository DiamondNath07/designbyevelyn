import { createHash } from 'node:crypto';


const respond = (data: Record<string, unknown>, status = 200) =>
  Response.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const expectedOrigin =
    process.env.CONTACT_ALLOWED_ORIGIN || new URL(request.url).origin;
  if (origin && origin !== expectedOrigin)
    return respond({ error: 'Request not allowed.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return respond({ error: 'Please send a JSON request.' }, 415);
  }

  // Bound the actual request stream, including requests without Content-Length.
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return respond({ error: 'Empty request.' }, 400);
    const decoder = new TextDecoder();
    let size = 0;
    let text = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32768) {
        await reader.cancel();
        return respond({ error: 'Your message is too long.' }, 413);
      }
      text += decoder.decode(value, { stream: true });
    }
    data = JSON.parse(text + decoder.decode());
  } catch {
    return respond({ error: 'Invalid request.' }, 400);
  }
  if (!data || typeof data !== 'object' || Array.isArray(data))
    return respond({ error: 'Invalid request.' }, 400);
  if (data.website) return respond({ ok: true }); // Honeypot: do not send spam.

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  if (!name || name.length > 100 || /[\r\n]/.test(name))
    return respond({ error: 'Please enter a valid name.' }, 400);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return respond({ error: 'Please enter a valid email address.' }, 400);
  if (!message || message.length > 5000)
    return respond(
      { error: 'Please enter a message of up to 5,000 characters.' },
      400
    );
  if (
    typeof data.requestId !== 'string' ||
    !/^[0-9a-f-]{36}$/i.test(data.requestId)
  )
    return respond(
      { error: 'Invalid submission. Please refresh and try again.' },
      400
    );

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return respond(
      {
        error:
          'The contact form is not configured yet. Please try again later.',
      },
      503
    );
  }
  try {
    // Including a content hash avoids conflicts if the visitor edits and retries.
    const digest = createHash('sha256')
      .update(JSON.stringify({ name, email, message }))
      .digest('hex');
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `contact/${data.requestId}/${digest}`,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Nathmond project enquiry — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!result.ok)
      return respond(
        { error: 'Unable to send right now. Please try again shortly.' },
        502
      );
    const accepted = await result.json();
    if (!accepted.id)
      return respond(
        { error: 'Unable to confirm sending. Please try again.' },
        502
      );
    return respond({ ok: true });
  } catch {
    return respond(
      { error: 'Unable to send right now. Please try again shortly.' },
      502
    );
  }
}
