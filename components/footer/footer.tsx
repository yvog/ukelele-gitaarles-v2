import classNames from 'classnames';
import Link from 'next/link';
import {Button} from '../button/button';
import styles from './footer.module.scss';

export const FooterComponent: React.FC = () => {
    return (
        <footer className={classNames(styles.footer, 'container')}>
            <div className="main-container row">
                <div className="col-md-4">
                    <h3>Snel navigeren</h3>
                    <nav className={styles.footer_nav}>
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
                    </nav>
                </div>
                <div className="col-md-4">
                    <h3>Contact</h3>
                    <p>Tel.: 06 38462008</p>
                    <Button href="/contact">Contact via mail</Button>
                </div>
                <div className="col-md-4">
                    <h3>Bedrijfsgegevens</h3>
                    <p>
                        Gitaar- en Ukelele lessen aan huis! <br />
                        Koudekerk aan den Rijn, Zuid-Holland <br />
                        KvK: 76892387 <br />
                    </p>
                </div>
            </div>
        </footer>
    )
};

export const Footer = FooterComponent;