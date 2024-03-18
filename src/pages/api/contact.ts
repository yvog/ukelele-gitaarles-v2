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
      if (isInvalidFormSubmission(req, 'POST', recaptchaRes, 'submitcontact')) {
        res.send({
          success: false,
          reason: 'invalid request',
        });
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
