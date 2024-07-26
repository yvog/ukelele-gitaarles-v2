export default async function handler(req, res) {
  const referer = req.headers['referer'];

  res.clearPreviewData({});

  if (referer && referer.includes(process.env.NEXT_PUBLIC_BASE_URL)) {
    const previousPathname = referer.split(
      process.env.NEXT_PUBLIC_BASE_URL
    )?.[1];

    if (previousPathname) {
      res.redirect(previousPathname, 307);

      return;
    }
  }

  res.redirect('/', 307);
}
