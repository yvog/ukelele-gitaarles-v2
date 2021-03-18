import { sendMail, verifyRecaptchaToken } from '../../server/utils'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const formData = req.body.formData
  const token = req.body.token

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (
      req.method !== 'POST' ||
      !recaptchaRes ||
      !recaptchaRes.success ||
      recaptchaRes.action !== 'submitrequestmaintenance'
    ) {
      res.send({
        success: false,
        reason: 'invalid request',
      })
    }

    await sendMail(
      'Aanvraag reparatie/onderhoud via ukelele-gitaarles.nl',
      `
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
    `,
    )

    res.send({
      success: true,
    })
  })
}
