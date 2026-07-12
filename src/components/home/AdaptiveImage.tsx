import { useEffect, useState } from 'react';

type AdaptiveImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
  fallbackLabel?: string;
};

export function AdaptiveImage({
  alt,
  className = '',
  fallbackClassName = '',
  fallbackLabel,
  src,
  ...props
}: AdaptiveImageProps) {
  const [state, setState] = useState<'idle' | 'loaded' | 'error'>('idle');

  useEffect(() => {
    setState('idle');
  }, [src]);

  if (!src || state === 'error') {
    return (
      <div
        aria-label={fallbackLabel ?? alt}
        className={`relative flex min-h-64 overflow-hidden rounded-[1.5rem] border border-white/60 bg-[linear-gradient(135deg,#efe8ff_0%,#d9e8ff_32%,#d4f5ff_66%,#f7d5ff_100%)] ${fallbackClassName}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(75,46,154,0.18),transparent_40%)]" />
        <div className="relative flex w-full flex-col justify-end gap-2 p-5 text-slate-700">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Image placeholder
          </span>
          <span className="max-w-xs text-sm leading-6">{fallbackLabel ?? alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      alt={alt}
      className={className}
      onError={() => setState('error')}
      onLoad={() => setState('loaded')}
      src={src}
      {...props}
    />
  );
}
