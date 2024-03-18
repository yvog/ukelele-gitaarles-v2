import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useScrollTopReset = () => {
  const router = useRouter();

  useEffect(() => {
    const onRouteChangeComplete = () => {
      window.document.body.scrollTop = 0;
    };

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);
};
