import './AnimatedAsset.scss';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

import websiteWebm from '../../assets/animation-website.webm';
import websiteMp4 from '../../assets/animation-website.mp4';
import websitePoster from '../../assets/animation-website-poster.jpg';

import storeWebm from '../../assets/animation-store.webm';
import storeMp4 from '../../assets/animation-store.mp4';
import storePoster from '../../assets/animation-store-poster.jpg';

import antivirusWebm from '../../assets/animation-antivirus.webm';
import antivirusMp4 from '../../assets/animation-antivirus.mp4';
import antivirusPoster from '../../assets/animation-antivirus-poster.jpg';

import notFoundWebm from '../../assets/animation-404.webm';
import notFoundMp4 from '../../assets/animation-404.mp4';
import notFoundPoster from '../../assets/animation-404-poster.jpg';

const animations = {
  website: { webm: websiteWebm, mp4: websiteMp4, poster: websitePoster },
  store: { webm: storeWebm, mp4: storeMp4, poster: storePoster },
  antivirus: { webm: antivirusWebm, mp4: antivirusMp4, poster: antivirusPoster },
  '404': { webm: notFoundWebm, mp4: notFoundMp4, poster: notFoundPoster },
} as const;

export type AnimationName = keyof typeof animations;

interface AnimatedAssetProps {
  /** Which bundled animation to render. */
  name: AnimationName;
  /** Accessible description of the animation. */
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Renders a short looping animation. Uses WebM/MP4 video instead of an
 * animated GIF (roughly 10x smaller), and falls back to a static poster
 * frame for users who prefer reduced motion.
 */
function AnimatedAsset({ name, alt, className, width, height }: AnimatedAssetProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { webm, mp4, poster } = animations[name];
  const classes = className ? `animated-asset ${className}` : 'animated-asset';

  if (prefersReducedMotion) {
    return (
      <img
        className={classes}
        src={poster}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <video
      className={classes}
      poster={poster}
      width={width}
      height={height}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={alt}
      role="img"
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}

export default AnimatedAsset;
