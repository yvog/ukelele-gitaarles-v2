import React from 'react'
import { CustomForm, HeaderNavigation, Layout } from '../components'

export default function RequestMaintenancePage() {
  const schema = {
    type: 'object',
    required: ['instrument', 'forName', 'surName', 'email', 'comments', 'gdprConsent'],
    properties: {
      instrument: {
        type: 'string',
        title: 'Type snaarinstrument',
        enum: ['Ukelele', 'Gitaar', 'Overige'],
      },
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
        title: 'Omschrijving huidige staat van het instrument:',
      },
      gdprConsent: {
        type: 'boolean',
        title: 'Ik heb de privacy verklaring gelezen en ga hiermee akkoord',
        default: false,
        const: true,
      },
    },
  }

  const uiSchema = {
    instrument: {
      'ui:widget': 'radio',
    },
    comments: {
      'ui:widget': 'textarea',
    },
  }

  return (
    <Layout title="Reparatie/onderhoud aanvragen" useReCaptcha>
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <section className="main-container body">
        <article>
          <h2 className="repair-title">Reparatie/onderhoud aanvragen</h2>
          <p>
            Gebruik onderstaand formulier om reparatie of onderhoud voor je snaarinstrument aan te vragen. Na ontvangst
            zal ik via e-mail contact met je opnemen, waaruit een vrijblijvende offerte zal voortkomen.
          </p>
        </article>

        <article>
          <CustomForm
            schema={schema}
            uiSchema={uiSchema}
            httpAction="/api/request-maintenance"
            method="POST"
            className="maintenance-form"
            recaptchaAction="submitrequestmaintenance"
          />
          <div className="privacy-text">
            * op dit formulier is de{' '}
            <a href="/privacy-verklaring" target="_blank" className="blue-link">
              privacy verklaring
            </a>{' '}
            van toepassing
          </div>
        </article>
      </section>
    </Layout>
  )
}
