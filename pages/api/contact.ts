import { sendMail } from '../../server/mailer';

export default async function handler(req, res) {

  res.setHeader('Content-Type', 'application/json')

  const formData = req.body.formData

  if (req.method === 'POST') {

    await sendMail('Opmerking/vraag via ukelele-gitaarles.nl', `
      Beste meneer Geldhof,

      Iemand heeft een opmerking/vraag verstuurd via het contactformulier op ukelele-gitaarles.nl.

      Volledige naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      E-mailadres: ${formData.email ?? ''}
      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}
      Opmerking/vraag:
      
      ${formData.comments ?? ''}


      Met vriendelijke groet,

      ukelele-gitaarles.nl
   `)
    res.statusCode = 200
  } else {
    res.statusCode = 403
  }

  res.end()
}