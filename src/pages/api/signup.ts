import { sendMail, verifyRecaptchaToken } from '../../server/utils';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const formData = req.body.formData;
  const token = req.body.token;

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (
      req.method !== 'POST' ||
      !recaptchaRes ||
      !recaptchaRes.success ||
      recaptchaRes.action !== 'submitsignup'
    ) {
      res.send({
        success: false,
        reason: 'invalid request',
      });
    }

    await sendMail(
      'Nieuwe aanmelding via ukelele-gitaarles.nl',
      `
      Nieuwe aanmelding via ukelele-gitaarles.nl

      Naam: ${formData.forName ?? ''} ${formData.surName ?? ''}
      E-mailadres: ${formData.email ?? ''}
      Telefoonnummer: ${formData.telephone ?? ''}
      Geboortedatum: ${formData.dateOfBirth ?? ''}
      Postcode: ${formData.postalCode ?? ''}

      Instrument: ${formData.lessonType ?? ''}
      Eerder muziekles gehad: ${formData.experience ? 'Ja' : 'Nee'}
      Instrument huren: ${formData.hire ? 'Ja' : 'Nee'}
      Proefles: ${formData.testLesson ? 'Ja' : 'Nee'}

      AVG toestemming: ${formData.gdprConsent ? 'Ja' : 'Nee'}

      Opmerkingen:
      
      ${formData.comments ?? ''}

    `
    );

    res.send({
      success: true,
    });
  });
}
