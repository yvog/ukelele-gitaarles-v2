import { default as classNames } from 'classnames';
import iconEmail from '../../../public/images/icon/icon_email.svg';
import iconFacebook from '../../../public/images/icon/icon_facebook.svg';
import iconTelephone from '../../../public/images/icon/icon_telephone.svg';
import { FooterFragment, NavigationItemFragment } from '../../gql/graphql';
import styles from './footer.module.scss';

type FooterProps = FooterFragment;

export const Footer: React.FC<FooterProps> = ({
  contactTitle,
  contactUrl,
  facebookUrl,
  kvk,
  navigation,
  navigationTitle,
  telephoneNumber,
  companyDetailsTitle,
  companyName,
  copyright,
}) => {
  return (
    <footer className={classNames(styles.footer, 'container')}>
      <div className={styles.footer_inner}>
        <picture>
          <source
            media="(min-width:1200px)"
            srcSet="/images/background/blue_background.webp"
          />
          <source
            media="(min-width:992px)"
            srcSet="/images/background/blue_background.webp"
          />
          <source
            media="(min-width:0)"
            srcSet="/images/background/blue_background.webp"
          />
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
              <h3>{navigationTitle}</h3>
              <nav
                className={styles.line_hover_nav}
                aria-label={navigationTitle}
              >
                <ul>
                  {(navigation as NavigationItemFragment[])?.map((item) => (
                    <li key={`${item.__typename}-${item.id}`}>
                      <a href={item.url}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={styles.footer_contact}>
              <h3>{contactTitle}</h3>

              <div className={styles.footer_contact_icons}>
                <a
                  href={`tel:${telephoneNumber}`}
                  aria-label="telephone number"
                >
                  <object data={iconTelephone} aria-hidden="true" tabIndex={-1}>
                    telephone
                  </object>
                </a>
                <a href={contactUrl} aria-label="contact url">
                  <object
                    data={iconEmail}
                    aria-hidden="true"
                    aria-label="contact icon"
                    tabIndex={-1}
                  >
                    contact
                  </object>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook url"
                >
                  <object data={iconFacebook} aria-hidden="true" tabIndex={-1}>
                    facebook
                  </object>
                </a>
              </div>
            </div>
            <div className={styles.footer_companydetails}>
              <h3>{companyDetailsTitle}</h3>
              <span>{companyName}</span>
              <span>KvK: {kvk}</span>
            </div>
          </div>
          <div className={styles.disclaimer}>
            <div>
              &copy; {new Date().getFullYear()} {copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
