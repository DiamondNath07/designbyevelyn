import { assetUrl, imageSet, type ImageKey } from "@/lib/media";
import { InViewVideo } from "./InViewVideo";

type ImgProps = {
  src: ImageKey;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/** Responsive image served from R2 using the pre-built WebP variants. */
export function Img({ src, alt, sizes = "100vw", className, priority }: ImgProps) {
  const set = imageSet(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={set.src}
      srcSet={set.srcSet}
      sizes={set.srcSet ? sizes : undefined}
      width={set.width}
      height={set.height}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}

type VideoProps = {
  src: string;
  poster?: ImageKey;
  label: string;
  className?: string;
};

/** Muted looping preview video. Nothing downloads until it is in view. */
export function Video({ src, poster, label, className }: VideoProps) {
  return (
    <InViewVideo
      className={className}
      src={assetUrl(src)}
      poster={poster ? imageSet(poster).src : undefined}
      label={label}
    />
  );
}
