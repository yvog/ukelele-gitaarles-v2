import { NextApiRequest, NextApiResponse } from 'next';
import {
  isInvalidFormSubmission,
  verifyRecaptchaToken,
} from '../../util/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const postalCode = req.body.postalCode;
    const token = req.body.token;

    await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
      if (
        isInvalidFormSubmission(req, 'POST', recaptchaRes, 'postalcodetolatlng')
      ) {
        res.send({
          error: true,
          reason: 'invalid request',
        });
      }

      await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode},Nederland&key=${process.env.GEOCODING_API_KEY}`,
        {
          method: 'GET',
        }
      )
        .then((stream) => stream.json())
        .then((data) => {
          res.send({
            error: false,
            ...data,
          });
        })
        .catch((e) => {
          console.error('error', e);

          res.send({
            error: true,
            reason: 'request failed',
          });
        });
    });
  } catch (e) {
    console.error('error', e);

    res.send({
      error: true,
      reason: 'request failed',
    });
  }
}
