import { sendMail, verifyRecaptchaToken } from '../../server/utils';

export default async function handler(req, res) {
  const formData = req.body.formData
  const token = req.body.token

  res.setHeader('Content-Type', 'application/json')

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (req.method !== 'POST' || !recaptchaRes || !recaptchaRes.success || recaptchaRes.action !== 'submitcontact') {
      res.end(JSON.stringify({
        success: false
      }))
    }

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

    res.end(JSON.stringify({
      success: true
    }))
  })
}