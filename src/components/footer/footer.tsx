import { default as classNames } from 'classnames'
import iconFacebook from '../../../public/images/icon/icon_facebook.svg'
import iconEmail from '../../../public/images/icon/icon_email.svg'
import iconTelephone from '../../../public/images/icon/icon_telephone.svg'
import styles from './footer.module.scss'

const FooterComponent: React.FC = () => {
  return (
    <footer className={classNames(styles.footer, 'container')}>
      <div className={styles.footer_inner}>
        <picture>
          <source media="(min-width:1200px)" srcSet="/images/background/blue_background.webp" />
          <source media="(min-width:992px)" srcSet="/images/background/blue_background.webp" />
          <source media="(min-width:0)" srcSet="/images/background/blue_background.webp" />
          <img
            src="/images/background/blue_background.webp"
            loading="lazy"
            alt="blue background"
            className={classNames('section_background')}
            width={1920}
            height={445}
          />
        </picture>

        <div className="main-container">
          <div className={styles.inner_container}>
            <div className={styles.footer_nav}>
              <h3>Snel navigeren</h3>
              <nav className={styles.line_hover_nav} aria-label="Main navigation">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/leskosten">Leskosten</a>
                  </li>
                  <li>
                    <a href="/aanmelden">Aanmelden</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/privacy-verklaring">Privacy verklaring</a>
                  </li>
                  <li>
                    <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.footer_contact}>
              <h3>Contact</h3>

              <div className={styles.footer_contact_icons}>
                <a href="tel:0638462008" aria-label="telephone number">
                  <object data={iconTelephone} aria-hidden="true">
                    telephone
                  </object>
                </a>
                <a href="/contact" aria-label="email address">
                  <object data={iconEmail} aria-hidden="true">
                    email
                  </object>
                </a>
                <a
                  href="https://www.facebook.com/ukelelegitaarles/"
                  target="_blank"
                  aria-label="facebook link"
                >
                  <object data={iconFacebook} aria-hidden="true">
                    facebook
                  </object>
                </a>
              </div>
            </div>
            <div className={styles.footer_companydetails}>
              <h3>Bedrijfsgegevens</h3>
              <span>Gitaar- en Ukelele lessen aan huis!</span>
              <span> Koudekerk aan den Rijn, Zuid-Holland </span>
              <span>KvK: 76892387</span>
            </div>
          </div>

          <div className={styles.disclaimer}>
            <div>
              &copy; Copyright {new Date().getFullYear()} Ukelele-Gitaarles, alle rechten
              voorbehouden. Deze website is gerealiseerd door{' '}
              <a href="https://github.com/yvog">Yvo Geldhof</a> en{' '}
              <a href="https://verageldhof.nl">Vera Geldhof.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const Footer = FooterComponent
