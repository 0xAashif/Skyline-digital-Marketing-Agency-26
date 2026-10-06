import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Button } from '../components/ui/Button';
import { SkylineBars } from '../components/brand/SkylineBars';

export const NotFoundPage: React.FC = () => {
  useDocumentMeta({
    title: 'Page Not Found — Skyline',
    description: 'The requested page could not be located on Skyline Digital Marketing Agency.',
  });

  return (
    <div className="w-full pt-40 pb-32 flex flex-col items-center justify-center text-center px-5">
      <div className="max-w-md space-y-6">
        <SkylineBars variant="logo" className="w-10 h-10 mx-auto" />

        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2B6BFF] font-semibold">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#0B0F14] tracking-tight">
            Off the skyline.
          </h1>
          <p className="text-base text-[#5B6470] leading-relaxed">
            The link you followed does not exist or may have been relocated. Let’s get you back on track.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <Button to="/" variant="primary" withArrow>
            Return to homepage
          </Button>
          <Button to="/contact" variant="secondary">
            Contact agency
          </Button>
        </div>
      </div>
    </div>
  );
};
