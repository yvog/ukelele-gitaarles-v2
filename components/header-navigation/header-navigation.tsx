import classNames from 'classnames';
import Link from 'next/link';
import React, {useCallback, useRef, useState} from 'react';
import styles from './header-navigation.module.scss';
import {MenuButton} from '../menu-button/menu-button';

type HeaderNavigationComponentProps = {
  variant?: 'white' | 'black';
};

const HeaderNavigationComponent: React.FC<HeaderNavigationComponentProps> = ({
  variant = 'white'
}) => {
  const isBlack = (variant === 'black');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onMenuOpen = useCallback(() => {
    if (!menuOpen) {
      setMenuOpen(true)
      document.body.style.overflow = 'hidden'
    } else {
      setMenuOpen(false)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const menuButtonLabel = menuOpen ? 'Close' : 'Menu'

  return (
    <header className={classNames(styles.header, {[styles.black]: isBlack})}>

      <Link href="/">
        <a>
          <img className={styles.logo} src={`/images/logo/ugl_logo_${variant}.svg`} alt="UGL logo white" width="280" height="100" />
        </a>
      </Link>

      <nav className={
        classNames(
          styles.nav,
          {
            [styles.line_hover_nav_black]: isBlack,
            [styles.line_hover_nav]: !isBlack,
            [styles.show]: menuOpen
          }
        )}>

        <div className={styles.nav_inner}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/over-mij">
            <a>Over mij</a>
          </Link>

          <Link href="/aanbod">
            <a>Aanbod</a>
          </Link>

          <Link href="/leskosten">
            <a>Leskosten</a>
          </Link>

          <Link href="/aanmelden">
            <a>Aanmelden</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>

      <MenuButton label={menuButtonLabel} onMenuOpen={onMenuOpen} />

    </header>
  )
};

export const HeaderNavigation = HeaderNavigationComponent;