import Form, {FormProps} from "@rjsf/core";
import {HeaderNavigation, Layout} from '../components';

export default function SignUpPage() {

    const schema = {
        title: "Todo",
        type: "object",
        required: ["title"],
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
                title: "Voornaam"
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
                title: "Postcode"
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
                minLength: 9
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
        lessonType: {
            "ui:widget": "radio"
        },
        experience: {
            "ui:widget": "radio"
        },
        dateOfBirth: {
            "ui:widget": "date"
        },
        comments: {
            "ui:widget": "textarea"
        }
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

                <article /*className={styles.signup_form_container}*/>
                    <Form
                        schema={schema as any}
                        liveValidate={true}
                        uiSchema={uiSchema}
                        onChange={(e) => console.log("changed")}
                        onSubmit={() => console.log("submitted")}
                        onError={() => console.log("errors")} />
                </article>
            </section>

        </Layout>
    )
}
