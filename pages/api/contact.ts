import { sendMail, verifyRecaptchaToken } from '../../server/utils'
import { NowRequest, NowResponse } from '@vercel/node'

export default async function handler(req: NowRequest, res: NowResponse) {
  const formData = req.body.formData
  const token = req.body.token

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (req.method !== 'POST' || !recaptchaRes || !recaptchaRes.success || recaptchaRes.action !== 'submitcontact') {
      res.send({
        success: false,
        reason: 'invalid request',
      })
    }

    await sendMail(
      'Opmerking/vraag via ukelele-gitaarles.nl',
      `
      Beste meneer Geldhof,

      Iemand heeft een opmerking/vraag verstuurd via het contactformulier op ukelele-gitaarles.nl.

      Volledige naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      E-mailadres: ${formData.email ?? ''}
      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}
      Opmerking/vraag:

      ${formData.comments ?? ''}

      Met vriendelijke groet,

      ukelele-gitaarles.nl
    `,
    )

    res.send({
      success: false,
    })
  })
}
