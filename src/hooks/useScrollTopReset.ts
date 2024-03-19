import { useRouter } from 'next/router';
import { useEffect } from 'react';

const onRouteChangeComplete = () => {
  window.document.body.scrollTop = 0;
};

export const useScrollTopReset = () => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      return router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);
};
