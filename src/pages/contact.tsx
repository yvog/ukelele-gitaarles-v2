import { CustomForm, HeaderNavigation, Layout } from '../components'

export default function RequestMaintenancePage() {
  const schema = {
    type: 'object',
    required: ['forName', 'email', 'gdprConsent', 'comments'],
    properties: {
      forName: {
        type: 'string',
        title: 'Voornaam',
      },
      surName: {
        type: 'string',
        title: 'Achternaam',
      },
      email: {
        type: 'string',
        format: 'email',
        title: 'E-mailadres',
      },
      comments: {
        type: 'string',
        title: 'Bericht:',
      },
      gdprConsent: {
        type: 'boolean',
        title: 'Ik heb de [privacy verklaring](/privacy-verklaring) gelezen en ga hiermee akkoord',
        default: false,
        const: true,
      },
    },
  }

  const uiSchema = {
    comments: {
      'ui:widget': 'textarea',
    },
  }

  return (
    <Layout
      title="Contact"
      description={'Stel gerust vragen aan Bert Geldhof via het contactformulier'}
      canonical="/contact"
      useReCaptcha
    >
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>
      <main>
        <section className="main-container body">
          <h2>Contact</h2>
          <p className="max-width-content">
            Voor overige vragen en/of opmerking(en) kun je onderstaand formulier invullen. Na
            ontvangst beantwoord ik zo snel mogelijk het bericht. Voor het aanmelden voor lessen heb
            ik een apart formulier, zie{' '}
            <a href="/aanmelden" className="blue-link">
              het aanmeldformulier
            </a>
            .
          </p>
          <CustomForm
            schema={schema}
            uiSchema={uiSchema}
            httpAction="/api/contact"
            method="POST"
            className="contact-form"
            recaptchaAction="submitcontact"
          />
        </section>
      </main>
    </Layout>
  )
}
