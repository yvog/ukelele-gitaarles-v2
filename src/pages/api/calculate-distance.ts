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
    const latlng = req.body.latlng;
    const token = req.body.token;

    await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
      if (
        isInvalidFormSubmission(req, 'POST', recaptchaRes, 'calculatedistance')
      ) {
        res.send({
          error: true,
          reason: 'invalid request',
        });
      }

      await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${process.env.HOME_ADDRESS}&destinations=${latlng}&mode=driving&language=nl-NL&key=${process.env.DISTANCE_MATRIX_API_KEY}`,
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
