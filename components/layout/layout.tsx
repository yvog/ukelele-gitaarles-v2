import Head from 'next/head';
import {Footer} from '..';

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export const LayoutComponent: React.FC<LayoutProps> = ({
  children,
  title = 'Ukelele-Gitaarles',
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} - Ukelele-Gitaarles</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,date=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { /* for SEO purposes */}
      <h1 className="hidden">Welkom - Ukelele-Gitaarles</h1>

      {children}

      <Footer />
    </>
  )
};

export const Layout = LayoutComponent;