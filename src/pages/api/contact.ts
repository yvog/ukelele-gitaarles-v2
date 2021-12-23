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
      recaptchaRes.action !== 'submitcontact'
    ) {
      res.send({
        success: false,
        reason: 'invalid request',
      })
    }

    await sendMail(
      'Opmerking/vraag via ukelele-gitaarles.nl',
      `
      Opmerking/vraag via ukelele-gitaarles.nl

      Naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      E-mailadres: ${formData.email ?? ''}
      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}
      Opmerking/vraag:

      ${formData.comments ?? ''}
      
    `
    )

    res.send({
      success: true,
    })
  })
}
