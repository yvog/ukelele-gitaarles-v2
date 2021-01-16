import { sendMail } from '../../server/mailer';

export default async function handler(req, res) {

  res.setHeader('Content-Type', 'application/json')

  const formData = req.body.formData

  if (req.method === 'POST') {

    await sendMail('Nieuwe aanmelding via ukelele-gitaarles.nl', `
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
    `)
    res.statusCode = 200
  } else {
    res.statusCode = 403
  }

  res.end()
}