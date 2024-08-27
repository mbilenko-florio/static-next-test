'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import languageDetector from './languageDetector';

export const useRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();

    if (pathname.startsWith('/' + detectedLng)) {
      // prevent endless loop
      return;
    }

    if (languageDetector.cache && detectedLng) languageDetector.cache(detectedLng);

    router.replace('/' + detectedLng + pathname);
  });
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};
