const sgMail = require('@sendgrid/mail')

export function verifyRecaptchaToken(token) {
  return fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    }
  )
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res
    })
}

export const sendMail = async (subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`
  const mail = {
    to: process.env.ADMIN_EMAIL,
    from: from,
    subject: subject,
    text: text,
    replyTo: from,
  }

  await sgMail
    .send(mail)
    .then(() => {
      console.log('mail sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
