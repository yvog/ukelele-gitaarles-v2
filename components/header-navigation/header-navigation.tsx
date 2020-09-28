import Link from 'next/link'
import styles from './header-navigation.module.scss';

export function HeaderNavigation() {
  return (
    <header className={styles.header}>
    
      <img src="https://placehold.it/280x100" width="280" height="100" />

      <img src="https://placehold.it/1920x1080" width="1920" height="1080" className={styles.background_image} />
      
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
}