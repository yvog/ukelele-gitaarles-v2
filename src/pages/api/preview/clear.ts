export default async function handler(req, res) {
  try {
    res.clearPreviewData({});
    res.status(200).end();
  } catch (e) {
    console.error('error', e);
    res.status(500).end();
  }
}
