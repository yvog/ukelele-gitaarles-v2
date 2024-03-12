import { graphQLClientPreview } from '../../client';
import { PreviewLayoutDocument, PreviewLayoutQuery } from '../../gql/graphql';

const defaultError = (res) => {
  return res.status(401).json({ message: 'Invalid request' });
};

export default async function handler(req, res) {
  if (req.query.secret !== process.env.HYGRAPH_PREVIEW_KEY || !req.query.slug) {
    return defaultError(res);
  }

  try {
    const layoutData: PreviewLayoutQuery = await graphQLClientPreview.request(
      PreviewLayoutDocument,
      {
        slug: req.query.slug,
      }
    );

    if (!layoutData) {
      return defaultError(res);
    }

    res.setPreviewData({});
    res.writeHead(307, { Location: layoutData.page.slug });
    res.end();
  } catch (e) {
    console.error(e);

    return defaultError(res);
  }
}
