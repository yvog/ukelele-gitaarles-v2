import React from 'react';
import {CustomForm, HeaderNavigation, Layout} from '../components';

export default function SignUpPage() {

    const today = new Date()

    const schema = {
        type: "object",
        required: [
            "lessonType",
            "forName",
            "surName",
            "dateOfBirth",
            "postalCode",
            "email",
            "gdprConsent"
        ],
        properties: {
            lessonType: {
                type: "string",
                title: "Welk instrument wil je leren bespelen?",
                enum: [
                    "Ukelele",
                    "Gitaar",
                    "Piano",
                    "Keyboard"
                ]
            },
            experience: {
                type: "boolean",
                title: "Heb je wel eens eerder muziekles gehad?",
                default: false,
                enumNames: [
                    "Ja",
                    "Nee"
                ]
            },
            forName: {
                type: "string",
                title: "Voornaam",
            },
            surName: {
                type: "string",
                title: "Achternaam"
            },
            dateOfBirth: {
                type: "string",
                title: "Geboortedatum"
            },
            address: {
                type: "string",
                title: "Adres"
            },
            postalCode: {
                type: "string",
                title: "Postcode",
                format: 'postalcode-nl'
            },
            city: {
                type: "string",
                title: "Plaats"
            },
            email: {
                type: "string",
                format: "email",
                title: "E-mailadres"
            },
            telephone: {
                type: "string",
                title: "Telefoonnummer",
                format: "tel",
                minLength: 7
            },
            comments: {
                type: "string",
                title: "Opmerkingen"
            },
            gdprConsent: {
                type: "boolean",
                title: "Ik heb de privacyverklaring gelezen en ga hiermee akkoord",
                default: false,
                const: true
            },
        }
    };

    const uiSchema = {
        lessonType: {
            "ui:widget": "radio"
        },
        experience: {
            "ui:widget": "radio"
        },
        dateOfBirth: {
            "ui:widget": "date",
        },
        comments: {
            "ui:widget": "textarea"
        },
        postalCode: {
            "ui:placeholder": "2021 AB"
        }
    };

    const onSubmit = (formData) => {
        fetch('/api/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            // res.status === 200 ? this.setState({submitted: true}) : ''

            console.log(res)
        })
    };

    return (
        <Layout title="Aanmelden">

            <div className="main-container">
                <HeaderNavigation variant='black' />
            </div>

            <section className="main-container">
                <article>
                    <h2>Aanmelden voor lessen</h2>
                    <p>
                        Vul onderstaand formulier in om je aan te melden voor ukelele-, gitaar-, piano- of keyboardlessen.
                    </p>
                </article>

                <article>
                    <CustomForm
                        schema={schema}
                        uiSchema={uiSchema}
                        action='/api/signup'
                        method='POST'
                        className='signup-form'
                    />
                </article>
            </section>

        </Layout>
    )
}
