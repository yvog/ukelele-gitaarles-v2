import React from 'react';
import {
  ContentBlockFragment,
  RepairMaintenanceFormFragment,
} from '../../../gql/graphql';
import { ContentBlock } from '../../content-block/content-block';
import { CustomForm } from '../../custom-form/custom-form';

type RepairMaintenanceFormProps = RepairMaintenanceFormFragment;

export const RepairMaintenanceForm: React.FC<RepairMaintenanceFormProps> = ({
  contentBlock,
}) => {
  const schema = {
    type: 'object',
    required: [
      'instrument',
      'forName',
      'surName',
      'email',
      'comments',
      'gdprConsent',
    ],
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
        title:
          'Ik heb de [privacy verklaring](/privacy-verklaring) gelezen en ga hiermee akkoord',
        default: false,
        const: true,
      },
    },
  };

  const uiSchema = {
    instrument: {
      'ui:widget': 'radio',
    },
    comments: {
      'ui:widget': 'textarea',
    },
  };

  return (
    <div id="repair-maintenance-form">
      <ContentBlock {...(contentBlock as ContentBlockFragment)} />

      <section className="main-container body">
        <CustomForm
          schema={schema}
          uiSchema={uiSchema}
          httpAction="/api/request-maintenance"
          method="POST"
          className="maintenance-form"
          recaptchaAction="submitrequestmaintenance"
        />
      </section>
    </div>
  );
};
