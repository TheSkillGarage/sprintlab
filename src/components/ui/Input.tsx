import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label: string;
};

export function Input({ className = '', error, id, label, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;

  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-900" htmlFor={inputId}>
      <span>{label}</span>
      <input
        aria-describedby={errorId}
        aria-invalid={Boolean(error)}
        className={`min-h-12 rounded-md border border-stone-300 bg-white px-4 text-base font-normal text-slate-950 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-slate-500 ${className}`}
        id={inputId}
        {...props}
      />
      {error ? (
        <span className="text-sm font-medium text-red-700" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
