import Head from 'next/head';
import { useEffect } from 'react';
import { isBrowser } from '../../util/client';

type LayoutMetaProps = {
  title?: string;
  useReCaptcha?: boolean;
  description?: string;
  canonical?: string;
  robots?: string[];
};

const preventDefault = (e: any) => {
  e.preventDefault();
};

export const disableScroll = function () {
  window.addEventListener('scroll', preventDefault, { passive: false });
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
};

export const enableScroll = function () {
  window.removeEventListener('scroll', preventDefault);
  window.removeEventListener('wheel', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
};

export const LayoutMeta: React.FC<LayoutMetaProps> = ({
  title,
  description,
  useReCaptcha = false,
  canonical = '',
  robots = ['follow', 'index'],
}) => {
  useEffect(() => {
    if (!isBrowser) return;

    const onMobileMenuToggled = (e: any) => {
      e.detail.open ? disableScroll() : enableScroll();
    };

    window.addEventListener('mobile-menu-toggled', onMobileMenuToggled, false);

    return () => {
      window.removeEventListener(
        'mobile-menu-toggled',
        onMobileMenuToggled,
        true
      );
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} - Ukelele-Gitaarles</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,date=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content={description} />

        <meta name="robots" content={robots.join(',')} />
        <link
          rel="canonical"
          href={`https://ukelele-gitaarles.nl${canonical}`}
        />

        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - Ukelele-Gitaarles`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://ukelele-gitaarles.nl${canonical}`}
        />
        <meta
          property="og:site_name"
          content="Bert Geldhof - Ukelele-Gitaarles"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={`${title} - Ukelele-Gitaarles`} />

        {useReCaptcha && (
          <script
            async
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}`}
            data-size="invisible"
          ></script>
        )}
      </Head>
      <h1 className="hidden">{title} - Ukelele-Gitaarles</h1>
    </>
  );
};
