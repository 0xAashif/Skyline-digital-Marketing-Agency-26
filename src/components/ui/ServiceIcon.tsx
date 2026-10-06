import React from 'react';
import {
  Search,
  TrendingUp,
  Share2,
  FileText,
  Sparkles,
  Code2,
} from 'lucide-react';

interface ServiceIconProps {
  name: 'Search' | 'TrendingUp' | 'Share2' | 'FileText' | 'Sparkles' | 'Code2';
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  className = 'w-5 h-5 text-[#2B6BFF]',
}) => {
  const iconProps = {
    className,
    strokeWidth: 1.5,
    'aria-hidden': true,
  };

  switch (name) {
    case 'Search':
      return <Search {...iconProps} />;
    case 'TrendingUp':
      return <TrendingUp {...iconProps} />;
    case 'Share2':
      return <Share2 {...iconProps} />;
    case 'FileText':
      return <FileText {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'Code2':
      return <Code2 {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};
