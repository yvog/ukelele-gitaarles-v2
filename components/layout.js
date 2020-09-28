import Link from 'next/link'
import Head from 'next/head'

import "../styles/styles.scss"

export default function Layout({
  children,
  title = 'Ukelele-Gitaarles',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer><div className="example">Hello World!</div></footer>
    </div>
  )
}