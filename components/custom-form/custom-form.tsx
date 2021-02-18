import Form from '@rjsf/core'
import classNames from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './custom-form.module.scss'

type CustomFormProps = {
  schema: any
  uiSchema: any
  httpAction: string
  method: 'POST' | 'GET'
  className: string
  recaptchaAction: string
}

const CustomFormComponent: React.FC<CustomFormProps> = ({
  schema,
  uiSchema,
  method,
  httpAction,
  className,
  recaptchaAction,
}) => {
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [grecaptcha, setGrecaptcha] = useState<any>(null)

  useEffect(() => {
    setGrecaptcha(((window as unknown) as any).grecaptcha)
  }, [setGrecaptcha])

  const transformErrors = useCallback((errors) => {
    return errors.map((error) => {
      if (typeof error.params.allowedValue == 'boolean' && error.params.allowedValue) {
        error.message = 'Zonder toestemming kan het formulier niet worden verzonden'
      }

      if (error.name === 'required') {
        error.message = 'Vul dit veld in'
      }

      if (error.name === 'format' && error.params.format === 'email') {
        error.message = 'Ongeldig e-mailadres'
      }

      if (error.name == 'format' && error.params.format == 'postalcode-nl') {
        error.message = 'Ongeldige postcode'
      }

      if (error.name === 'minLength') {
        error.message = `Mag niet korter dan ${error.params.limit} tekens zijn`
      }

      return error
    })
  }, [])

  const onSubmit = (formData) => {
    setSubmitting(true)

    grecaptcha.ready(() => {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY, {
          action: recaptchaAction,
        })
        .then((token: string) => {
          fetch(httpAction, {
            method: method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              token,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              setSubmitting(false)

              if (res?.success) {
                setSuccess(true)
              } else {
                setError(true)
              }
            })
        })
    })
  }

  const customFormats = {
    'postalcode-nl': /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
  }

  return (
    <>
      {(success || error) && (
        <div
          className={classNames(styles.form_message, {
            [styles.success_message]: success,
            [styles.error_message]: error,
          })}
        >
          {success ? 'Het formulier is succesvol verzonden' : 'Het formulier kon helaas niet worden verzonden'}
          <div
            onClick={() => {
              setSuccess(false)
              setError(false)
            }}
          >
            <img src="/images/icon/icon_close.svg" width="18" height="18" alt="icon_close" loading="lazy" />
          </div>
        </div>
      )}

      <Form
        schema={schema as any}
        liveValidate
        noHtml5Validate
        uiSchema={uiSchema}
        showErrorList={false}
        onSubmit={onSubmit}
        onError={() => {
          setSuccess(false)
          setError(false)
        }}
        className={classNames(styles.custom_form, className)}
        transformErrors={transformErrors}
        customFormats={customFormats}
        autoComplete={'off'}
      >
        <button type="submit" disabled={submitting}>
          Verzend
        </button>
      </Form>
    </>
  )
}

export const CustomForm = CustomFormComponent
