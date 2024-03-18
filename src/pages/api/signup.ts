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

    await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
      if (isInvalidFormSubmission(req, 'POST', recaptchaRes, 'submitsignup')) {
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
      )
        .then(() => {
          res.send({
            success: true,
          });
        })
        .catch((e) => {
          console.error('error', e);

          res.send({
            success: false,
            reason: 'email failed',
          });
        });
    });
  } catch (e) {
    console.error('error', e);

    res.send({
      success: false,
      reason: 'request failed',
    });
  }
}
