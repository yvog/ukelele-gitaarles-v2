import { NextApiRequest, NextApiResponse } from 'next';
import { graphQLClientPreview } from '../../../client';
import {
  PreviewLayoutDocument,
  PreviewLayoutQuery,
} from '../../../gql/graphql';

const defaultError = (res: NextApiResponse) => {
  return res.status(401).json({ message: 'Invalid request' });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
    res.redirect(layoutData.page.slug);
  } catch (e) {
    console.error(e);

    return defaultError(res);
  }
}
