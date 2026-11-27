import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nathaniel Diamond about senior product design roles and projects.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let's chat.">
        {site.availability}. Tell me about the role or product and I&apos;ll reply within two working days.
      </PageHero>
      <section className="container-x" aria-label="Contact form">
        <div className="panel max-w-3xl p-6 sm:p-10">
          <ContactForm fallbackEmail={site.email} />
        </div>
      </section>
    </>
  );
}
