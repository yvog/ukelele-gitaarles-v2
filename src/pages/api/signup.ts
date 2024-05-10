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

    if (isInvalidFormSubmission(req, 'POST', recaptchaRes, 'submitsignup')) {
      console.error('Invalid form submission');
      res.status(400).end();
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

    res.status(200).end();
  } catch (e) {
    console.error('error', e);

    res.status(500).end();
  }
}
