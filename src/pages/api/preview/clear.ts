export default async function handler(req, res) {
  res.clearPreviewData({});
  res.redirect(req.headers.referer, 307);
}
