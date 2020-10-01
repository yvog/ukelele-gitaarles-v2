import Link from 'next/link'
import styles from './header-navigation.module.scss';

export const HeaderNavigationComponent: React.FC = () => {
  return (
    <header className={styles.header}>

      <img src="/images/logo/ugl_logo_white.svg" alt="UGL logo white" width="280" height="100" />

      <nav className={styles.nav}>
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

      </nav>
    </header>
  )
};

export const HeaderNavigation = HeaderNavigationComponent;