type LoaderProps = {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeStyles = {
  sm: 'size-4 border-2',
  md: 'size-6 border-2',
  lg: 'size-10 border-4',
};

export function Loader({ label = 'Loading', size = 'md' }: LoaderProps) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-semibold text-slate-600">
      <span
        aria-hidden="true"
        className={`${sizeStyles[size]} animate-spin rounded-full border-slate-300 border-t-slate-950`}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
