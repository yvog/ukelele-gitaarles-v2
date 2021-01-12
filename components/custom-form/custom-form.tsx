import Form from '@rjsf/core';
import classNames from 'classnames';
import React from 'react';
import {Button} from '..';
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

    const onSubmit = (formData) => {
        fetch(action, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            // res.status === 200 ? this.setState({submitted: true}) : ''

            console.log(res)
        })
    };

    return (
        <Form
            schema={schema as any}
            liveValidate={true}
            uiSchema={uiSchema}
            showErrorList={false}
            onChange={(e) => console.log("changed")}
            onSubmit={onSubmit}
            onError={() => console.log("errors")}
            className={classNames(styles.custom_form, className)}
        />

    );
};

export const CustomForm = CustomFormComponent;