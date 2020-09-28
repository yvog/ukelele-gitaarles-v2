import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'Ukelele-Gitaarles 2.0',
}) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,date=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>
        <div className="example">Hello World!</div>
      </footer>

    </div>
  )
}