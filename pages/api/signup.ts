const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
}))

const send = () => {
  const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`;
  const message = {
    from,
    to: process.env.ADMIN_EMAIL,
    subject: `Nieuwe aanmelding via ukelele-gitaarles.nl`,
    text: '',
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}


export default function handler(req, res) {

  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'POST') {
    send();
    res.statusCode = 200
  } else {
    res.statusCode = 403
  }

  res.end()
}