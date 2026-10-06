import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  withArrow = false,
  isLoading = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6BFF] focus-visible:ring-offset-2 active:scale-[0.98] select-none group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 min-h-[38px] gap-1.5',
    md: 'text-sm px-6 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-8 py-3.5 min-h-[48px] gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#0B0F14] text-white hover:bg-[#1f2631] hover:-translate-y-[1px] shadow-sm',
    secondary:
      'bg-white text-[#0B0F14] border border-[#E7E8E4] hover:border-[#0B0F14] hover:bg-[#FAFAF7] hover:-translate-y-[1px]',
    accent:
      'bg-[#2B6BFF] text-white hover:bg-[#1a5af0] hover:-translate-y-[1px] shadow-sm',
    ghost:
      'bg-transparent text-[#0B0F14] hover:text-[#2B6BFF] p-0 min-h-[44px] inline-flex items-center',
  }[variant];

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
      {withArrow && !isLoading && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1 shrink-0"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
        disabled || isLoading ? 'opacity-60 cursor-not-allowed transform-none' : ''
      } ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
