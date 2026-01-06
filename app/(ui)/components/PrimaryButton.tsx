'use client';

import { AnchorHTMLAttributes } from 'react';

type PrimaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function PrimaryButton({
  className = '',
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <a
      {...props}
      className={`
        primary-button relative inline-flex items-center justify-center
        text-xs font-semibold uppercase tracking-wide
        px-6 py-3 rounded-md
        focus:outline-none focus:ring-1 focus:ring-offset-1
        ${className}
      `}
    >
      {children}

      <span className="border-anim pointer-events-none absolute inset-0">
        <span className="bottom"></span>
        <span className="left"></span>
      </span>
    </a>
  );
}
