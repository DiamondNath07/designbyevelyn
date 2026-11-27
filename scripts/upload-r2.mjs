// Dry run by default. Upload only: node --env-file=.env.r2.local scripts/upload-r2.mjs --upload
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { assetFiles, publicRoot, types } from './asset-files.mjs';
const files = await assetFiles();
const upload = process.argv.includes('--upload');
let client, Upload;
if (upload) {
  const required = ['R2_ACCOUNT_ID','R2_BUCKET_NAME','R2_ACCESS_KEY_ID','R2_SECRET_ACCESS_KEY'];
  if (required.some((key) => !process.env[key])) throw new Error('Missing R2 upload environment variables. See README.');
  const { S3Client } = await import('@aws-sdk/client-s3');
  ({ Upload } = await import('@aws-sdk/lib-storage'));
  client = new S3Client({ region: 'auto', endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID, secretAccessKey: process.env.R2_SECRET_ACCESS_KEY } });
}
let bytes = 0;
for (const file of files) {
  const key = path.relative(publicRoot, file).split(path.sep).join('/');
  const { size } = await stat(file);
  bytes += size;
  console.log(`${upload ? 'UPLOAD' : 'DRY RUN'} ${key} (${size} bytes)`);
  if (!upload) continue;
  await new Upload({ client, queueSize: 3, leavePartsOnError: false,
    params: { Bucket: process.env.R2_BUCKET_NAME, Key: key, Body: createReadStream(file),
      ContentType: types[path.extname(file).toLowerCase()], ContentLength: size,
      CacheControl: key.startsWith('optimized/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600' }
  }).done();
}
console.log(`${upload ? 'Uploaded' : 'Would upload'} ${files.length} files (${(bytes/1024/1024).toFixed(1)} MiB). No remote objects are deleted.`);
