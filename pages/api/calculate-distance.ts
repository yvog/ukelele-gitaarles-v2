import { verifyRecaptchaToken } from '../../server/utils'

export default async function handler(req, res) {
  const latlng = req.body.latlng
  const token = req.body.token

  await verifyRecaptchaToken(token).then(async (recaptchaRes) => {
    if (
      req.method !== 'POST' ||
      !recaptchaRes ||
      !recaptchaRes.success ||
      recaptchaRes.action !== 'calculatedistance'
    ) {
      res.send({
        error: true,
        reason: 'invalid request',
      })
    }

    await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${process.env.HOME_ADDRESS}&destinations=${latlng}&mode=driving&language=nl-NL&key=${process.env.DISTANCE_MATRIX_API_KEY}`,
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
