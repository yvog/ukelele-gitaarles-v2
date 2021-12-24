import Head from 'next/head'
import { PropsWithChildren, useEffect } from 'react'
import { Footer } from '..'

type LayoutProps = PropsWithChildren<{
  title?: string
  useReCaptcha?: boolean
  description?: string
  canonical?: string
  robots?: string[]
}>

const LayoutComponent: React.FC<LayoutProps> = ({
  children,
  title = 'Ukelele-Gitaarles',
  description,
  useReCaptcha = false,
  canonical = '',
  robots = ['follow', 'index'],
}) => {
  const descr =
    description ||
    'Bert Geldhof geeft gitaarles, ukelele les en pianoles aan huis in Alphen, Leiden en omstreken. Daarnaast  repareert en onderhoudt hij snaarinstrumenten.'

  const preventDefault = (e) => e.preventDefault()

  const disableScroll = function () {
    window.addEventListener('scroll', preventDefault, { passive: false })
    window.addEventListener('wheel', preventDefault, { passive: false })
    window.addEventListener('touchmove', preventDefault, { passive: false })
  }

  const enableScroll = function () {
    window.removeEventListener('scroll', preventDefault)
    window.removeEventListener('wheel', preventDefault)
    window.removeEventListener('touchmove', preventDefault)
  }

  const onMobileMenuToggled = (e: any) => (e.detail.open ? disableScroll() : enableScroll())

  useEffect(() => {
    window.addEventListener('mobile-menu-toggled', onMobileMenuToggled, false)

    return () => window.removeEventListener('mobile-menu-toggled', onMobileMenuToggled, true)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} - Ukelele-Gitaarles</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,date=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content={descr} />

        <meta name="robots" content={robots.join(',')} />
        <link rel="canonical" href={`https://ukelele-gitaarles.nl${canonical}`} />

        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - Ukelele-Gitaarles`} />
        <meta property="og:description" content={descr} />
        <meta property="og:url" content={`https://ukelele-gitaarles.nl${canonical}`} />
        <meta property="og:site_name" content="Bert Geldhof - Ukelele-Gitaarles" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={descr} />
        <meta name="twitter:title" content={`${title} - Ukelele-Gitaarles`} />

        <link rel="preload" href="/fonts/salsa.woff2" as="font" />
        <link rel="preload" href="/fonts/open_sans_300.woff2" as="font" />
        <link rel="preload" href="/fonts/open_sans_400.woff2" as="font" />

        {useReCaptcha && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}`}
            data-size="invisible"
          ></script>
        )}
      </Head>

      <h1 className="hidden">{title} - Ukelele-Gitaarles</h1>

      {children}

      <Footer />
    </>
  )
}

export const Layout = LayoutComponent
