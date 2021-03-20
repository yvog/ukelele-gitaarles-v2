import classNames from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuButton } from '../menu-button/menu-button'
import styles from './header-navigation.module.scss'

type HeaderNavigationComponentProps = {
  variant?: 'white' | 'black'
}

const HeaderNavigationComponent: React.FC<HeaderNavigationComponentProps> = ({ variant = 'white' }) => {
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

  const menuButtonLabel = menuOpen ? 'Sluit' : 'Menu'

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
      href: '/aanbod',
      label: 'Aanbod',
    },
    {
      href: '/leskosten',
      label: 'Leskosten',
    },
    {
      href: '/aanvragen',
      label: 'Aanvragen',
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

      <nav
        className={classNames(styles.nav, {
          [styles.line_hover_nav_black]: isBlack,
          [styles.line_hover_nav]: !isBlack,
          [styles.show]: menuOpen,
        })}
      >
        <div className={styles.nav_inner}>
          {menuItems.map((item) => (
            <Link key={`menuItem-${item.label}`} href={item.href}>
              <a
                onClick={() => {
                  menuOpen && onMenuOpen()
                }}
                className={classNames({
                  [styles.active]:
                    (pathname.startsWith(item.href) && item.href != '/') ||
                    (pathname === '/' && pathname.startsWith(item.href)),
                })}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>

      <MenuButton
        icon={`/images/icon/icon_${menuOpen ? 'close' : 'menu'}.svg`}
        label={menuButtonLabel}
        onMenuOpen={onMenuOpen}
      />
    </header>
  )
}

export const HeaderNavigation = HeaderNavigationComponent
