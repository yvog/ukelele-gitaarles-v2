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
      if (
        isInvalidFormSubmission(
          req,
          'POST',
          recaptchaRes,
          'submitrequestmaintenance'
        )
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
