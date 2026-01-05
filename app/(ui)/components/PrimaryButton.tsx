'use client';

import { ButtonHTMLAttributes } from 'react';

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  className = '',
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`
        primary-button relative inline-flex items-center justify-center
        text-xs font-semibold uppercase tracking-wide
        px-6 py-3 rounded-md
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${className}
      `}
    >
      {children}

      <span className="border-anim pointer-events-none absolute inset-0">
        <span className="bottom"></span>
        <span className="left"></span>
      </span>
    </button>
  );
}
