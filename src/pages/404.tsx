import { GetStaticProps } from 'next';
import { graphQLClient } from '../client';
import { Page } from '../components';
import { PreviewPageProps } from '../components/page/page';
import { REVALIDATE_PAGE_AFTER_SECONDS } from '../consts';
import { LayoutDocument, LayoutQuery } from '../gql/graphql';

type ErrorPageProps = LayoutQuery & PreviewPageProps;

export default function NotFound(props: ErrorPageProps) {
  const { page, preview } = props;

  return (
    <Page
      {...page}
      description={page?.pageDescription?.description}
      robots={['noindex', 'nofollow']}
      preview={preview}
    />
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
