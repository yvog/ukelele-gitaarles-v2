
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
}))

export const sendMail = (subject, text) => {
  const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`;
  const message = {
    from,
    to: process.env.ADMIN_EMAIL,
    subject,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}