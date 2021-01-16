import Form from '@rjsf/core';
import classNames from 'classnames';
import React, {useCallback, useState} from 'react';
import styles from './custom-form.module.scss';

type CustomFormProps = {
    schema: any;
    uiSchema: any;
    action: string;
    method: 'POST' | 'GET';
    className: string;
};
const CustomFormComponent: React.FC<CustomFormProps> = ({
    schema,
    uiSchema,
    method,
    action,
    className
}) => {

    const [success, setSuccess] = useState<boolean>(false)

    const transformErrors = useCallback((errors) => {
        return errors.map(error => {

            if (typeof error.params.allowedValue == 'boolean' && error.params.allowedValue) {
                error.message = "Zonder toestemming kan het formulier niet worden verzonden"
            }

            if (error.name === 'required') {
                error.message = 'Vul dit veld in'
            }

            if (error.name === 'format' && error.params.format === 'email') {
                error.message = 'Ongeldig e-mailadres'
            }

            if (error.name == 'format' && error.params.format == "postalcode-nl") {
                error.message = 'Ongeldige postcode';
            }

            return error;
        });

    }, [])

    const onSubmit = (formData) => {
        fetch(action, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {

            if (res && res.status === 200 && res.statusText === "OK") {
                setSuccess(true)
            }

        })
    };

    const customFormats = {
        'postalcode-nl': /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i
    }

    return (
        <>
            {success && (<div className={styles.success_message}>
                Het formulier is succesvol verzonden
                <div onClick={() => {
                    setSuccess(false)
                }}>
                    <img src="/images/icon/icon_close.svg" width="18" height="18" alt="menu" />
                </div>
            </div>)}

            <Form
                schema={schema as any}
                liveValidate
                noHtml5Validate
                uiSchema={uiSchema}
                showErrorList={false}
                onSubmit={onSubmit}
                onError={() => {
                    setSuccess(false)
                }}
                className={classNames(styles.custom_form, className)}
                transformErrors={transformErrors}
                customFormats={customFormats}
            />
        </>
    );
};

export const CustomForm = CustomFormComponent;