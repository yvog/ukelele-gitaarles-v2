import { GetStaticProps } from 'next';
import { graphQLClient } from '../client';
import { Layout, LayoutMeta } from '../components';
import { REVALIDATE_PAGE_AFTER_SECONDS } from '../consts';
import { ErrorPageLayoutDocument, ErrorPageLayoutQuery } from '../gql/graphql';

type ErrorPageProps = ErrorPageLayoutQuery;

export default function NotFound(props: ErrorPageProps) {
  const { title, pageDescription, errorPageLayout } = props?.errorPage;

  return (
    <>
      <LayoutMeta
        title={title}
        description={pageDescription?.description}
        robots={['noindex', 'nofollow']}
      />
      <Layout layout={errorPageLayout} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ErrorPageProps> = async () => {
  const layoutData: ErrorPageLayoutQuery = await graphQLClient.request(
    ErrorPageLayoutDocument,
    {
      slug: '/error-page/404',
    }
  );

  return {
    props: {
      ...(layoutData ?? {}),
    },
    revalidate: REVALIDATE_PAGE_AFTER_SECONDS,
  };
};
