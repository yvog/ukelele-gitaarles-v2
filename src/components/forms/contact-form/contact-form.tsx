import { ContactFormFragment } from '../../../gql/graphql';
import { CustomForm } from '../../custom-form/custom-form';

type ContactFormProps = ContactFormFragment;

export const ContactForm: React.FC<ContactFormProps> = () => {
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
        title:
          'Ik heb de [privacy verklaring](/privacy-verklaring) gelezen en ga hiermee akkoord',
        default: false,
        const: true,
      },
    },
  };

  const uiSchema = {
    comments: {
      'ui:widget': 'textarea',
    },
  };

  return (
    <section className="main-container body">
      <CustomForm
        schema={schema}
        uiSchema={uiSchema}
        httpAction="/api/contact"
        method="POST"
        className="contact-form"
        recaptchaAction="submitcontact"
      />
    </section>
  );
};
