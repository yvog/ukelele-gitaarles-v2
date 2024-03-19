import { CookieConsentProvider } from '@use-cookie-consent/react';
import { AppProps } from 'next/app';
import { COOKIE_CONSENT_VALID_DAYS } from '../consts';

import '../styles/main.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <CookieConsentProvider
      useCookieConsentHooksOptions={{
        consentCookieAttributes: {
          expires: COOKIE_CONSENT_VALID_DAYS,
        },
      }}
    >
      <Component {...pageProps} />
    </CookieConsentProvider>
  );
}

export default App;
