import { CookieConsentProvider } from '@use-cookie-consent/react';
import { AppProps } from 'next/app';
import { CookieBanner, GA4 } from '../components';
import { useScrollTopReset } from '../hooks/useScrollTopReset';
import '../styles/main.scss';

function App({ Component, pageProps }: AppProps) {
  useScrollTopReset();

  return (
    <CookieConsentProvider
      useCookieConsentHooksOptions={{
        consentCookieAttributes: {
          expires: 30, // days
        },
      }}
    >
      {/* <CookieBanner /> */}
      <GA4 />
      <Component {...pageProps} />
    </CookieConsentProvider>
  );
}

export default App;
