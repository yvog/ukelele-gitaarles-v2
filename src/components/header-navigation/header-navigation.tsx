import classNames from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MenuButton } from '../menu-button/menu-button'
import styles from './header-navigation.module.scss'

type HeaderNavigationComponentProps = {
  variant?: 'white' | 'black'
}

const HeaderNavigationComponent: React.FC<HeaderNavigationComponentProps> = ({
  variant = 'white',
}) => {
  const isBlack = variant === 'black'
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const onMenuOpen = () => {
    const open = !menuOpen

    setMenuOpen(open)

    const event = new CustomEvent('mobile-menu-toggled', {
      detail: {
        open,
      },
    })

    window.dispatchEvent(event)
  }

  const menuItems = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/over-mij',
      label: 'Over mij',
    },
    {
      href: '/diensten',
      label: 'Diensten',
    },
    {
      href: '/leskosten',
      label: 'Leskosten',
    },
    {
      href: '/aanmelden',
      label: 'Aanmelden',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ]

  const { pathname } = useRouter()

  return (
    <header className={classNames(styles.header, { [styles.black]: isBlack })}>
      <a href="/">
        <img
          className={styles.logo}
          src={`/images/logo/ugl_logo_${variant}.svg`}
          alt={`UGL logo ${variant}`}
          width="280"
          height="100"
          loading="eager"
        />
      </a>

      <Head>
        <link rel="preload" as="image" href={`/images/logo/ugl_logo_${variant}.svg`}></link>
      </Head>

      <nav
        className={classNames(styles.nav, {
          [styles.line_hover_nav_black]: isBlack,
          [styles.line_hover_nav]: !isBlack,
          [styles.show]: menuOpen,
        })}
        aria-label="Header navigation"
      >
        <ul className={styles.nav_inner}>
          {menuItems.map((item) => {
            const isActiveLink =
              (pathname.startsWith(item.href) && item.href != '/') ||
              (pathname === '/' && pathname.startsWith(item.href))

            return (
              <li key={`menuItem-${item.label}`}>
                <Link href={item.href}>
                  <a
                    onClick={() => {
                      menuOpen && onMenuOpen()
                    }}
                    className={classNames({
                      [styles.active]: isActiveLink,
                    })}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <MenuButton
        iconOpened={'/images/icon/icon_close.svg'}
        iconClosed={'/images/icon/icon_menu.svg'}
        onMenuOpen={onMenuOpen}
        aria-expanded={menuOpen}
        open={menuOpen}
      />
    </header>
  )
}

export const HeaderNavigation = HeaderNavigationComponent
