import {sendMail} from '../../server/mailer';

export default function handler(req, res) {

  res.setHeader('Content-Type', 'application/json')

  const formData = req.body.formData

  if (req.method === 'POST') {
    
    sendMail('Aanvraag reparatie/onderhoud via ukelele-gitaarles.nl', `
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
    `);
    res.statusCode = 200
  } else {
    res.statusCode = 403
  }

  res.end()
}