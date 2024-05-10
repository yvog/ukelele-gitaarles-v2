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

    if (
      isInvalidFormSubmission(
        req,
        'POST',
        recaptchaRes,
        'submitrequestmaintenance'
      )
    ) {
      console.error('Invalid form submission');
      res.status(400).end();
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

    res.status(200).end();
  } catch (e) {
    console.error('error', e);

    res.status(500).end();
  }
}
