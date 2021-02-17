import classNames from 'classnames'
import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import styles from './header-navigation.module.scss'
import { MenuButton } from '../menu-button/menu-button'

type HeaderNavigationComponentProps = {
  variant?: 'white' | 'black'
}

const HeaderNavigationComponent: React.FC<HeaderNavigationComponentProps> = ({ variant = 'white' }) => {
  const isBlack = variant === 'black'
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const onMenuOpen = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }

  const menuButtonLabel = menuOpen ? 'Close' : 'Menu'

  return (
    <header className={classNames(styles.header, { [styles.black]: isBlack })}>
      <a href="/">
        <Image
          className={styles.logo}
          src={`/images/logo/ugl_logo_${variant}.svg`}
          alt={`UGL logo ${variant}`}
          width="280"
          height="100"
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
          <a href="/">Home</a>
          <a href="/over-mij">Over mij</a>
          <a href="/aanbod">Aanbod</a>
          <a href="/leskosten">Leskosten</a>
          <a href="/aanvragen">Reparatie / onderhoud</a>
          <a href="/aanmelden">Aanmelden</a>
          <a href="/contact">Contact</a>
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
