import { sendMail, verifyRecaptchaToken } from '../../server/utils';

export default async function handler(req, res) {
  const formData = req.body.formData
  const token = req.body.token

  res.setHeader('Content-Type', 'application/json')

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (req.method !== 'POST' || !recaptchaRes || !recaptchaRes.success || recaptchaRes.action !== 'submitrequestmaintenance') {
      res.end(JSON.stringify({
        success: false
      }))
    }

    await sendMail('Aanvraag reparatie/onderhoud via ukelele-gitaarles.nl', `
      Beste meneer Geldhof,

      Oh jee, iemand heeft zijn/haar instrument gesloopt en vraagt jouw hulp het te repareren/onderhouden via ukelele-gitaarles.nl.

      Instrument: ${formData.instrument ?? ''}
      Volledige naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      E-mailadres: ${formData.email ?? ''}
      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}
      Opmerkingen: 
      
      ${formData.comments ?? ''}


      Met vriendelijke groet,

      ukelele-gitaarles.nl
    `)

    res.end(JSON.stringify({
      success: true
    }))
  })
}