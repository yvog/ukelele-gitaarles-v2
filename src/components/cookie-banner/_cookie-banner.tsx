import { useCookieConsentContext } from '@use-cookie-consent/react';
import { Button } from '../button/button';
import styles from './_cookie-banner.module.scss';

export default function _CookieBanner() {
  const { declineAllCookies, acceptCookies, acceptAllCookies } =
    useCookieConsentContext();

  return (
    <div className={styles.cookie_banner_backdrop}>
      <div
        className={styles.cookie_banner}
        role="dialog"
        aria-labelledby="cookiebanner-title"
        aria-describedby="cookiebanner-content"
        aria-modal="true"
      >
        <h3 id="cookiebanner-title">Cookies op Ukelele-Gitaarles.nl</h3>
        <div id="cookiebanner-content">
          <p>
            Ukelele-Gitaarles.nl maakt gebruik van functionele- en analytische
            cookies. Functionele cookies zijn noodzakelijk voor een correcte
            werking van de website. Analytische cookies worden gebruikt voor het
            verkrijgen van anonieme gebruikersinzichten.
          </p>
          <p>Geef je toestemming voor het plaatsen van cookies?</p>
        </div>

        <div className={styles.cookie_banner_buttons}>
          <Button onClick={declineAllCookies} outlineAlt>
            Alle cookies afwijzen
          </Button>

          <Button
            onClick={() =>
              acceptCookies({
                necessary: true,
                thirdParty: false,
              })
            }
            outlineAlt
          >
            Alleen functionele cookies accepteren
          </Button>

          <Button onClick={() => acceptAllCookies()} filled>
            Alle cookies accepteren
          </Button>
        </div>
      </div>
    </div>
  );
}
