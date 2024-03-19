import dynamic from 'next/dynamic';

export const CookieBanner = dynamic(() => import('./_cookie-banner'), {
  loading: () => <></>,
  ssr: false,
});
