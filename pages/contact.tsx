import React from 'react';
import {CustomForm, HeaderNavigation, Layout} from '../components';

export default function RequestMaintenancePage() {

    const schema = {
        type: "object",
        required: [],
        properties: {
            forName: {
                type: "string",
                title: "Voornaam"
            },
            surName: {
                type: "string",
                title: "Achternaam"
            },
            email: {
                type: "string",
                format: "email",
                title: "E-mailadres"
            },
            subject: {
                type: "string",
                title: "Onderwerp"
            },
            comments: {
                type: "string",
                title: "Opmerkingen"
            },
            gdprConsent: {
                type: "boolean",
                title: "Ik heb de privacyverklaring gelezen en ga hiermee akkoord.",
                default: false
            },
        }
    };

    const uiSchema = {
        comments: {
            "ui:widget": "textarea"
        }
    };

    return (
        <Layout title="Contact">

            <div className="main-container">
                <HeaderNavigation variant='black' />
            </div>

            <section className="main-container">
                <article>
                    <h2>Contact</h2>
                    <p>
                        Voor eventuele vragen kun je onderstaand formulier invullen. Na ontvangst van je bericht neem ik zo spoedig mogelijk contact met je op.
                    </p>
                </article>

                <article>
                    <CustomForm
                        schema={schema}
                        uiSchema={uiSchema}
                        action='/api/contact'
                        method='POST'
                        className='contact-form'
                    />
                </article>
            </section>

        </Layout>
    )
}