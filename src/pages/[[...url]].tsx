import { GetServerSideProps } from 'next';
import { graphQLClient } from '../client';
import { Layout, LayoutMeta } from '../components';
import { LayoutDocument, LayoutQuery } from '../gql/graphql';

type PageProps = LayoutQuery;

export default function Index(props: PageProps) {
  const { title, slug, pageDescription, robots, useReCaptcha } = props?.page;

  return (
    <>
      <LayoutMeta
        title={title}
        canonical={slug}
        description={pageDescription?.description}
        robots={robots?.split(',')}
        useReCaptcha={useReCaptcha}
      />
      <Layout layout={props.page.layout} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const pageUrl = context.query?.url
    ? (context.query?.url as string[]).join('/')
    : undefined;
  const layoutData: LayoutQuery = await graphQLClient.request(LayoutDocument, {
    slug: pageUrl ? `/${pageUrl}` : '/',
  });

  if (!layoutData?.page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...layoutData,
    },
  };
};
