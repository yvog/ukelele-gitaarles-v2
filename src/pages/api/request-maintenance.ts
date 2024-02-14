import { VercelRequest, VercelResponse } from '@vercel/node';
import { sendMail, verifyRecaptchaToken } from '../../server/utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const formData = req.body.formData;
  const token = req.body.token;

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
      });
    }

    await sendMail(
      'Aanvraag reparatie/onderhoud via ukelele-gitaarles.nl',
      `
      Aanvraag reparatie/onderhoud via ukelele-gitaarles.nl

      Instrument: ${formData.instrument ?? ''}
      Naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      E-mailadres: ${formData.email ?? ''}
      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}
      Bericht:

      ${formData.comments ?? ''}

    `
    );

    res.send({
      success: true,
    });
  });
}
