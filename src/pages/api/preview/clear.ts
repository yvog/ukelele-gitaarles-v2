export default async function handler(req, res) {
  res.clearPreviewData({});
  res.redirect('/', 307);
}
