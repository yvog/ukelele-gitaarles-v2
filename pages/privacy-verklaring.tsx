import { HeaderNavigation, Layout } from '../components'

export default function PrivacyStatementPage() {
  return (
    <Layout title="Privacy verklaring">
      <div className="main-container">
        <HeaderNavigation variant="black" />
      </div>

      <section className="main-container">
        <h2>Privacyverklaring</h2>
        <p>
          Bij gebruik van deze website gaat u akkoord met de onderstaande privacyverklaring. Dit document verklaard
          welke informatie wordt verzameld en voor welke doeleinden Ukelele-Gitaarles deze informatie gebruikt.
          <br />
          <br />
        </p>
        <p>
          Ukelele-Gitaarles verzamelt standaard geen persoonlijke informatie. Wanneer u één of meerdere formulieren
          invult, wordt er pas persoonlijke informatie verzameld. De formulieren zijn voorzien van Google ReCaptcha's
          anti-spambeveiliging. Zie de{' '}
          <a className="blue-link" target="_blank" href="https://policies.google.com/privacy?hl=nl">
            privacyverklaring
          </a>{' '}
          van Google.
          <br />
          <br />
        </p>

        <h3>Aanmelden</h3>
        <p>
          Voor het aanmelden worden de volgende persoonsgegevens gevraagd: voor- en achternaam, geboortedatum, postcode,
          e-mailadres, telefoonnummer. Uw gegevens blijven lokaal bewaard zolang u lessen volgt. Bij opzegging van uw
          aanmelding worden uw gegevens direct uit het lokale bestand vernietigd.
          <br />
          <br />
        </p>

        <h3>Contactformulier</h3>
        <p>
          Het contactformulier vraagt om de volgende persoonsgegevens: voornaam, achternaam en e-mailadres. Deze
          gegevens maken het mogelijk om uw bericht te beantwoorden. Zolang de e-mail niet is beantwoord, worden deze
          gegevens bewaard.
          <br />
          <br />
        </p>

        <h3>Reparatie/onderhoud aanvraagformulier</h3>
        <p>
          Het reparatie/onderhoud aanvraagformulier vraagt om de volgende persoonsgegevens: voornaam, achternaam en
          e-mailadres. Deze gegevens maken het mogelijk om uw aanvraag te beantwoorden. Zolang de aanvraag niet is
          verwerkt, worden deze gegevens bewaard.
          <br />
          <br />
        </p>

        <h3>De leskosten widget</h3>
        <p>
          Bij het opvragen van leskosten wordt om uw postcode gevraagd. Voor het berekenen van de leskosten wordt
          gebruik gemaakt van Google services. Zie de{' '}
          <a className="blue-link" target="_blank" href="https://policies.google.com/privacy?hl=nl">
            privacyverklaring
          </a>{' '}
          van Google. Ukelele-Gitaarles slaat deze gegevens niet op.
          <br />
          <br />
        </p>

        <p>
          Bovenstaande gegevens worden verder <b>niet</b> met derden, hetzij mondeling of digitaal, met andere bedrijven
          gedeeld.
          <br />
          <br />
        </p>

        <h3>Contact</h3>
        <p>
          Er kan gerust contact worden opgenomen via{' '}
          <a className="blue-link" href="/contact">
            het contactformulier
          </a>
          . Daarnaast ben ik telefonisch bereikbaar op 06 38462008.
          <br />
          <br />
        </p>

        <p>
          <i>Wijzigingen voorbehouden</i>
        </p>
      </section>
    </Layout>
  )
}
