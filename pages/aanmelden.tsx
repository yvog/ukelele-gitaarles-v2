import React from 'react'
import { CustomForm, HeaderNavigation, Layout } from '../components'

export default function SignUpPage() {
  const schema = {
    type: 'object',
    required: ['lessonType', 'forName', 'surName', 'dateOfBirth', 'postalCode', 'email', 'gdprConsent'],
    properties: {
      lessonType: {
        type: 'string',
        title: 'Welk instrument wil je leren bespelen?',
        enum: ['Ukelele', 'Gitaar', 'Piano', 'Keyboard'],
      },
      experience: {
        type: 'boolean',
        title: 'Heb je wel eens eerder muziekles gehad?',
        default: false,
        enumNames: ['Ja', 'Nee'],
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
      telephone: {
        type: 'string',
        title: 'Telefoonnummer',
        minLength: 7,
      },
      dateOfBirth: {
        type: 'string',
        title: 'Geboortedatum',
      },
      postalCode: {
        type: 'string',
        title: 'Postcode',
        format: 'postalcode-nl',
      },
      hire: {
        type: 'boolean',
        title: 'Ik wil een instrument huren (optioneel)',
        default: false,
      },
      testLesson: {
        type: 'boolean',
        title: 'Aanmelden voor een proefles (optioneel)',
        default: false,
      },
      comments: {
        type: 'string',
        title: 'Eventuele opmerkingen:',
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
    lessonType: {
      'ui:widget': 'radio',
    },
    experience: {
      'ui:widget': 'radio',
    },
    dateOfBirth: {
      'ui:widget': 'date',
      'ui:placeholder': 'DD/MM/YYYY',
    },
    comments: {
      'ui:widget': 'textarea',
    },
    postalCode: {
      'ui:placeholder': '2021 AB',
    },
  }

  return (
    <Layout title="Aanmelden" useReCaptcha>
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <section className="main-container body">
        <article>
          <h2>Aanmelden voor lessen</h2>
          <p>Vul onderstaand formulier in om je aan te melden voor ukelele-, gitaar-, piano- of keyboardlessen.</p>
        </article>

        <article>
          <CustomForm
            schema={schema}
            uiSchema={uiSchema}
            httpAction="/api/signup"
            method="POST"
            className="signup-form"
            recaptchaAction="submitsignup"
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
