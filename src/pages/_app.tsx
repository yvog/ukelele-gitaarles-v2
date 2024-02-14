import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/main.scss';

function App({ Component, pageProps }: AppProps) {
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

  return <Component {...pageProps} />;
}

export default App;
