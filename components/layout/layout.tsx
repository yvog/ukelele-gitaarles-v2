import Head from "next/head";
import { Footer } from "..";
import styles from "./layout.module.scss";

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

const LayoutComponent: React.FC<LayoutProps> = ({
  children,
  title = "Ukelele-Gitaarles",
}) => {
  const description =
    "Bert Geldhof geeft gitaar-, ukelele- en pianolessen. Hiernaast repareert/onderhoudt hij snaarinstrumenten.";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} - Ukelele-Gitaarles</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,date=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="robots" content="noodp" />
        <link rel="canonical" href="https://ukelele-gitaarles.nl/" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - Ukelele-Gitaarles`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ukelele-gitaarles.nl/" />
        <meta
          property="og:site_name"
          content="Bert Geldhof - Ukelele-Gitaarles"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={`${title} - Ukelele-Gitaarles`} />
      </Head>

      <h1 className="hidden">{title} - Ukelele-Gitaarles</h1>

      {children}

      <Footer />
    </>
  );
};

export const Layout = LayoutComponent;
