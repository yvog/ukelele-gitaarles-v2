import { useCookieConsentContext } from '@use-cookie-consent/react';
import Head from 'next/head';

export const GA4 = () => {
  const { consent } = useCookieConsentContext();

  return (
    <Head>
      {consent.thirdParty && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `,
            }}
          />
        </>
      )}
    </Head>
  );
};
