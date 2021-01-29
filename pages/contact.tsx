import React from 'react'
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
        title: 'Ik heb de privacyverklaring gelezen en ga hiermee akkoord.',
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
      scripts={[`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}`]}
    >
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <section className="main-container body">
        <article>
          <h2>Contact</h2>
          <p>
            Voor overige vragen en/of opmerking(en) kun je onderstaand formulier invullen. Na ontvangst beantwoord ik zo
            snel mogelijk het bericht. Voor het aanmelden voor lessen heb ik een apart formulier, zie{' '}
            <a href="/aanmelden" className="blue-link">
              het aanmeldformulier
            </a>
            .
          </p>
        </article>

        <article>
          <CustomForm
            schema={schema}
            uiSchema={uiSchema}
            httpAction="/api/contact"
            method="POST"
            className="contact-form"
            recaptchaAction="submitcontact"
          />
          <div className="privacy-text">
            * op dit formulier is mijn{' '}
            <a href="/privacy-verklaring" target="_blank" className="blue-link">
              privacyverklaring
            </a>{' '}
            van toepassing.
          </div>
        </article>
      </section>
    </Layout>
  )
}
