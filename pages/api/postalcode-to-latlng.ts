import { verifyRecaptchaToken } from '../../server/utils'
import { NowRequest, NowResponse } from '@vercel/node'

export default async function handler(req: NowRequest, res: NowResponse) {
  const postalCode = req.body.postalCode
  const token = req.body.token

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (
      req.method !== 'POST' ||
      !recaptchaRes ||
      !recaptchaRes.success ||
      recaptchaRes.action !== 'postalcodetolatlng'
    ) {
      res.send({
        error: true,
        reason: 'invalid request',
      })
    }

    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode},Nederland&key=${process.env.GEOCODING_API_KEY}`,
      {
        method: 'GET',
      },
    )
      .then((stream: any) => stream.json())
      .then((data: any) =>
        res.send({
          error: false,
          ...data,
        }),
      )
      .catch((data: any) =>
        res.send({
          error: true,
          ...data,
        }),
      )
  })
}
