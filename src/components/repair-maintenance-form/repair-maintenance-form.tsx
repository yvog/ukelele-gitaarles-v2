import React from 'react'
import { CustomForm } from '..'

type RepairMaintenanceFormProps = unknown

const RepairMaintenanceFormComponent: React.FC<RepairMaintenanceFormProps> = () => {
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
        title: 'Ik heb de [privacy verklaring](/privacy-verklaring) gelezen en ga hiermee akkoord',
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
    <section className="main-container body" id="repair-maintenance-form">
      <h3>Reparatie/onderhoud aanvragen</h3>
      <p>
        Gebruik onderstaand formulier om reparatie of onderhoud voor je snaarinstrument aan te
        vragen. Na ontvangst zal ik via e-mail contact met je opnemen, waaruit een vrijblijvende
        offerte zal voortkomen.
      </p>
      <CustomForm
        schema={schema}
        uiSchema={uiSchema}
        httpAction="/api/request-maintenance"
        method="POST"
        className="maintenance-form"
        recaptchaAction="submitrequestmaintenance"
      />
    </section>
  )
}

export const RepairMaintenanceForm = RepairMaintenanceFormComponent
