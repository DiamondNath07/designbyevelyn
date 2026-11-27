// Run from your project root: node scripts/prepare-assets.mjs
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import sharp from 'sharp';
import { assetFiles, publicRoot } from './asset-files.mjs';

const files = (await assetFiles()).filter((file) => !file.startsWith(path.join(publicRoot, 'optimized') + path.sep));
const manifest = {};
await mkdir(path.join(publicRoot, 'optimized'), { recursive: true });
for (const file of files) {
  if (!/\.(png|jpe?g|webp|avif)$/i.test(file)) continue;
  const data = await readFile(file);
  const meta = await sharp(data).metadata();
  // Preserve animation. GIFs and SVGs also keep their original format.
  if (!meta.width || !meta.height || (meta.pages || 1) > 1) continue;
  const rotated = [5,6,7,8].includes(meta.orientation);
  const width = rotated ? meta.height : meta.width;
  const height = rotated ? meta.width : meta.height;
  const key = '/' + path.relative(publicRoot, file).split(path.sep).join('/');
  const hash = createHash('sha256').update(data).update('webp-q82-v1').digest('hex').slice(0, 16);
  const widths = [...new Set([320,640,960,1280,1600,2400,width].filter((w) => w <= Math.min(width,2400)))];
  const variants = [];
  for (const size of widths.sort((a,b) => a-b)) {
    const src = `/optimized/${hash}-${size}.webp`;
    await sharp(data).rotate().resize({ width: size, withoutEnlargement: true }).webp({ quality: 82 })
      .toFile(path.join(publicRoot, src.slice(1)));
    variants.push({ src, width: size });
  }
  manifest[key] = { src: variants.at(-1).src, width, height, variants };
}
await mkdir('src/lib', { recursive: true });
await writeFile('src/lib/asset-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${Object.keys(manifest).length} images. Originals and videos are unchanged. Commit src/lib/asset-manifest.json, upload assets, then rebuild.`);
