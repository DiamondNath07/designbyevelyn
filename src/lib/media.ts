import manifest from "./asset-manifest.json";

/**
 * All images and videos live on Cloudflare R2 (served from NEXT_PUBLIC_ASSET_BASE_URL).
 * Images are pre-optimised to WebP at several widths by `npm run assets:prepare`,
 * so the site never uses Vercel's paid image optimisation.
 */
type Variant = { src: string; width: number };
type Entry = { src: string; width: number; height: number; variants: Variant[] };

const entries = manifest as Record<string, Entry>;

export const assetBase = (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "").replace(/\/+$/, "");

export const assetUrl = (path: string) => `${assetBase}/${path.replace(/^\/+/, "")}`;

export type ImageKey = string;

export function imageSet(key: ImageKey) {
  const entry = entries[key];
  if (!entry) {
    // Fall back to the original file if it has not been prepared yet.
    return { src: assetUrl(key), srcSet: undefined, width: undefined, height: undefined };
  }
  return {
    src: assetUrl(entry.src),
    srcSet: entry.variants.map((v) => `${assetUrl(v.src)} ${v.width}w`).join(", "),
    width: entry.width,
    height: entry.height,
  };
}
