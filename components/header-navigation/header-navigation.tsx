import classNames from 'classnames';
import Link from 'next/link';
import styles from './header-navigation.module.scss';

type HeaderNavigationComponentProps = {
  variant?: 'white' | 'black';
};

export const HeaderNavigationComponent: React.FC<HeaderNavigationComponentProps> = ({
  variant = 'white'
}) => {

  const isBlack = (variant === 'black');

  return (
    <header className={classNames(styles.header, {[styles.black]: isBlack})}>

      <img src={`/images/logo/ugl_logo_${variant}.svg`} alt="UGL logo white" width="280" height="100" />

      <nav className={
        classNames(
          styles.nav,
          {[styles.line_hover_nav_black]: isBlack},
          {[styles.line_hover_nav]: !isBlack}
        )}>
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