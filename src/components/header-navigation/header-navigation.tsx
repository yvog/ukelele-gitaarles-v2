import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { NavigationItemFragment } from '../../gql/graphql';
import { MenuButton } from '../menu-button/menu-button';
import styles from './header-navigation.module.scss';

type HeaderNavigationProps = {
  items?: NavigationItemFragment[];
  variant?: 'white' | 'white_full' | 'black';
};

const preventDefault = (e: any) => {
  e.preventDefault();
};

export const disableScroll = function () {
  window.addEventListener('scroll', preventDefault, { passive: false });
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
};

export const enableScroll = function () {
  window.removeEventListener('scroll', preventDefault);
  window.removeEventListener('wheel', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
};

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  variant = 'white',
  items,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isBlack = variant === 'black';

  const { asPath } = useRouter();

  const onMenuOpen = () => {
    const open = !menuOpen;

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    setMenuOpen(open);
  };

  return (
    <header className={classNames(styles.header, { [styles.black]: isBlack })}>
      <Link href="/">
        <a aria-label="terug naar home">
          <img
            className={styles.logo}
            src={`/images/logo/ukelele_gitaarles_logo_${variant}.svg`}
            alt="Ukelele-Gitaarles logo"
            width="280"
            height="100"
            loading="eager"
          />
        </a>
      </Link>
      <Head>
        <link
          rel="preload"
          as="image"
          href={`/images/logo/ukelele_gitaarles_logo_${variant}.svg`}
        ></link>
      </Head>

      {items && (
        <nav
          className={classNames(styles.nav, {
            [styles.line_hover_nav_black]: isBlack,
            [styles.line_hover_nav]: !isBlack,
            [styles.show]: menuOpen,
          })}
          aria-label="Header navigation"
        >
          <ul className={styles.nav_inner}>
            {items.map((item) => {
              const isActiveLink =
                (asPath.startsWith(item.url) && item.url != '/') ||
                (asPath === '/' && asPath.startsWith(item.url));

              return (
                <li key={`menuItem-${item.label}`}>
                  <Link href={item.url}>
                    <a
                      onClick={() => {
                        menuOpen && onMenuOpen();
                      }}
                      className={classNames({
                        [styles.active]: isActiveLink,
                      })}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <MenuButton
        iconOpened="/images/icon/icon_close.svg"
        iconClosed="/images/icon/icon_menu.svg"
        onMenuOpen={onMenuOpen}
        aria-expanded={menuOpen}
        open={menuOpen}
      />
    </header>
  );
};
