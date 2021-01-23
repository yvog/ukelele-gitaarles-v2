import { sendMail, verifyRecaptchaToken } from '../../server/utils'

export default async function handler(req, res) {
  const formData = req.body.formData
  const token = req.body.token

  res.setHeader('Content-Type', 'application/json')

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (req.method !== 'POST' || !recaptchaRes || !recaptchaRes.success || recaptchaRes.action !== 'submitsignup') {
      res.send({
        success: false,
        reason: 'invalid request',
      })
    }

    await sendMail(
      'Nieuwe aanmelding via ukelele-gitaarles.nl',
      `
      Beste meneer Geldhof,

      Hoera! Je hebt een nieuwe aanmelding ontvangen via ukelele-gitaarles.nl.

      Instrument: ${formData.lessonType ?? ''}
      Eerder muziekles gehad: ${formData.experience ? 'Ja' : 'Nee'}
      Volledige naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      Geboortedatum: ${formData.dateOfBirth ?? ''}
      Adres: ${formData.address ?? ''}
      Postcode: ${formData.postalCode ?? ''}
      Plaats: ${formData.city ?? ''}
      E-mailadres: ${formData.email ?? ''}
      Telefoonnummer: ${formData.telephone ?? ''}
      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}
      Opmerkingen: 
      
      ${formData.comments ?? ''}

      Met vriendelijke groet,

      ukelele-gitaarles.nl
    `,
    )

    res.send({
      success: true,
    })
  })
}
