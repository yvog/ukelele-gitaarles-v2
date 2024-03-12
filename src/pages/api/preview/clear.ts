export default async function handler(req, res) {
  res.clearPreviewData({});
  res.status(200).json({
    message:
      'Preview mode was successfully closed. You can now close this tab.',
  });
}
