import { GetStaticProps } from 'next';
import { graphQLClient } from '../client';
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

export const getStaticProps: GetStaticProps<ErrorPageProps> = async () => {
  const layoutData: LayoutQuery = await graphQLClient.request(LayoutDocument, {
    slug: '/404',
    stage: 'PUBLISHED',
  });

  return {
    props: {
      ...(layoutData ?? {}),
      preview: false,
    },
    revalidate: REVALIDATE_PAGE_AFTER_SECONDS,
  };
};
