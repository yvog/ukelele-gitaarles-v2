import React from "react";
import { CustomForm, HeaderNavigation, Layout } from "../components";

export default function RequestMaintenancePage() {
  const schema = {
    type: "object",
    required: [
      "instrument",
      "forName",
      "surName",
      "email",
      "comments",
      "gdprConsent",
    ],
    properties: {
      instrument: {
        type: "string",
        title: "Type snaarinstrument",
        enum: ["Ukelele", "Gitaar", "Overige"],
      },
      forName: {
        type: "string",
        title: "Voornaam",
      },
      surName: {
        type: "string",
        title: "Achternaam",
      },
      email: {
        type: "string",
        format: "email",
        title: "E-mailadres",
      },
      comments: {
        type: "string",
        title: "Opmerkingen",
      },
      gdprConsent: {
        type: "boolean",
        title: "Ik heb de privacyverklaring gelezen en ga hiermee akkoord",
        default: false,
        const: true,
      },
    },
  };

  const uiSchema = {
    instrument: {
      "ui:widget": "radio",
    },
    comments: {
      "ui:widget": "textarea",
    },
  };

  return (
    <Layout
      title="Reparatie/onderhoud aanvragen"
      scripts={[
        `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}`,
      ]}
    >
      <div className="main-container">
        <HeaderNavigation variant="black" />
      </div>

      <section className="main-container">
        <article>
          <h2 className="repair-title">Reparatie/onderhoud aanvragen</h2>
          <p>
            Vul onderstaand formulier in om reparatie of onderhoud voor je
            snaarinstrument aan te vragen.
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
        </article>
      </section>
    </Layout>
  );
}
