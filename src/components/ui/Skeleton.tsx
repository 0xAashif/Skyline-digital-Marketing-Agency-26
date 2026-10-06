import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = 'h-4 w-full' }) => {
  return (
    <div
      className={`animate-pulse bg-[#E7E8E4]/60 rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
};
