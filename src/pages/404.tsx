import { GetStaticProps } from 'next';
import { graphQLClient, graphQLClientPreview } from '../client';
import { Layout, LayoutMeta, PreviewBanner } from '../components';
import { REVALIDATE_PAGE_AFTER_SECONDS } from '../consts';
import { LayoutDocument, LayoutQuery } from '../gql/graphql';

type ErrorPageProps = LayoutQuery & {
  preview?: boolean;
};

export default function NotFound(props: ErrorPageProps) {
  const { title, pageDescription, layout } = props?.page;

  return (
    <>
      <LayoutMeta
        title={title}
        description={pageDescription?.description}
        robots={['noindex', 'nofollow']}
      />
      {props.preview && <PreviewBanner />}
      <Layout layout={layout} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ErrorPageProps> = async (
  context
) => {
  const isPreviewMode = !!context?.preview;
  let client = isPreviewMode ? graphQLClientPreview : graphQLClient;

  const layoutData: LayoutQuery = await client.request(LayoutDocument, {
    slug: '/404',
    stage: isPreviewMode ? 'DRAFT' : 'PUBLISHED',
  });

  return {
    props: {
      ...(layoutData ?? {}),
      preview: !!context?.preview,
    },
    revalidate: REVALIDATE_PAGE_AFTER_SECONDS,
  };
};
