import Head from 'next/head'
import {Footer} from '..';

export function Layout({
  children,
  title = 'Ukelele-Gitaarles',
}) {
  return (
    <>
      <div className="main-container">
        <Head>
          <meta charSet="utf-8" />
          <title>{title} - Ukelele-Gitaarles</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no,date=no" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />


        </Head>

        {children}
      </div>

      <Footer />
    </>
  )
}