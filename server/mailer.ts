const sgMail = require('@sendgrid/mail')

export const sendMail = (subject, text) => {
  // return new Promise((resolve, reject) => {
  //   transporter.sendMail(message, (error, info) =>
  //     error ? reject(error) : resolve(info)
  //   )
  // })

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`
  const mail = {
    to: process.env.ADMIN_EMAIL,
    from: from,
    subject: subject,
    text: text,
    replyTo: from
  }

  sgMail.send(mail).then(() => {
    console.log('mail sent')
  }).catch((error) => {
    console.error(error)
  })
}