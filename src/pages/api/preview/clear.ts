import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const referer = req.headers['referer'];

  res.clearPreviewData({});

  if (referer && referer.includes(process.env.NEXT_PUBLIC_BASE_URL)) {
    const previousPathname = referer.split(
      process.env.NEXT_PUBLIC_BASE_URL
    )?.[1];

    if (previousPathname) {
      res.redirect(previousPathname);

      return;
    }
  }

  res.redirect('/');
}
