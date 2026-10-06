import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-white text-[#0B0F14] border-[#E7E8E4]',
    accent: 'bg-[#EAF0FF] text-[#2B6BFF] border-[#2B6BFF]/20',
    muted: 'bg-[#FAFAF7] text-[#5B6470] border-[#E7E8E4]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full border transition-colors ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
