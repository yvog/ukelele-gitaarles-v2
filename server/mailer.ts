const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 465,
  secure: true,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
})

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


// export const sendMail = (subject, text) => {
//   // sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//   // const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`
//   // const mail = {
//   //   to: process.env.ADMIN_EMAIL,
//   //   from: from,
//   //   subject: subject,
//   //   text: text,
//   //   replyTo: from
//   // }

//   // sgMail.send(mail).then(() => {
//   //   console.log('mail sent')
//   // }).catch((error) => {
//   //   console.error(error)
//   // })
// }