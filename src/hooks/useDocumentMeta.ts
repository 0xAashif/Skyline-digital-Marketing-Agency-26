import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description?: string;
}

export function useDocumentMeta({ title, description }: MetaOptions) {
  useEffect(() => {
    const defaultTitle = 'Skyline Digital Marketing Agency — Rise above the noise';
    const formattedTitle = title.includes('Skyline')
      ? title
      : `${title} — Skyline Digital Marketing Agency`;

    document.title = formattedTitle;

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [title, description]);
}
