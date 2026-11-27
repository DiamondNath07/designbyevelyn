import { readdir } from 'node:fs/promises';
import path from 'node:path';
// Originals live outside git (default: ./media-source). Override with ASSET_SOURCE_DIR.
export const publicRoot = path.resolve(process.env.ASSET_SOURCE_DIR || 'media-source');
export const types = { '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.avif':'image/avif', '.gif':'image/gif', '.svg':'image/svg+xml', '.mp4':'video/mp4', '.webm':'video/webm', '.mov':'video/quicktime', '.woff':'font/woff', '.woff2':'font/woff2', '.ttf':'font/ttf', '.otf':'font/otf', '.ico':'image/x-icon' };
export async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.isSymbolicLink()) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    else if (entry.isFile()) files.push(file);
  }
  return files;
}
export const assetFiles = async () => (await walk(publicRoot)).filter((file) => types[path.extname(file).toLowerCase()]);
