import classNames from "classnames";
import Link from "next/link";
import { Button } from "../button/button";
import styles from "./footer.module.scss";

const FooterComponent: React.FC = () => {
  return (
    <footer className={classNames(styles.footer, "container")}>
      <div className="main-container row">
        <div className={classNames(styles.footer_nav, "col-md-4")}>
          <h3>Snel navigeren</h3>
          <nav className={styles.line_hover_nav}>
            <a href="/over-mij">Over mij</a>
            <a href="/aanbod">Aanbod</a>
            <a href="/leskosten">Leskosten</a>
            <a href="/aanvragen">Reparatie / onderhoud</a>
            <a href="/aanmelden">Aanmelden</a>
          </nav>
        </div>
        <div className={classNames("col-md-4", styles.footer_contact)}>
          <h3>Contact</h3>
          <span>Tel.: 06 38462008</span>
          <Button href="/contact">Contact via mail</Button>
          <a href="https://www.facebook.com/ukelelegitaarles/">
            <img
              src="/images/icon/icon_facebook.svg"
              width="40"
              height="40"
              alt="Facebook"
            />
          </a>
        </div>
        <div className={classNames("col-md-4", styles.footer_companydetails)}>
          <h3>Bedrijfsgegevens</h3>
          <span>Gitaar- en Ukelele lessen aan huis!</span>
          <span> Koudekerk aan den Rijn, Zuid-Holland </span>
          <span>KvK: 76892387</span>
        </div>
      </div>
    </footer>
  );
};

export const Footer = FooterComponent;
