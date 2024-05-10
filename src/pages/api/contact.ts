import { NextApiRequest, NextApiResponse } from 'next';
import {
  isInvalidFormSubmission,
  sendMail,
  verifyRecaptchaToken,
} from '../../util/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const formData = req.body.formData;
    const token = req.body.token;

    const recaptchaRes = await verifyRecaptchaToken(token);

    if (isInvalidFormSubmission(req, 'POST', recaptchaRes, 'submitcontact')) {
      console.error('Invalid form submission');
      res.status(400).end();
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
    );

    res.status(200).end();
  } catch (e) {
    console.error('error', e);

    res.status(500).end();
  }
}
