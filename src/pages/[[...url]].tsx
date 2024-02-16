import { GetStaticProps } from 'next';
import { graphQLClient } from '../client';
import { Layout, LayoutMeta } from '../components';
import {
  LayoutDocument,
  LayoutQuery,
  PagesDocument,
  PagesQuery,
} from '../gql/graphql';

type PageProps = LayoutQuery;

export default function Index(props: PageProps) {
  const { title, slug, pageDescription, robots, useReCaptcha, layout } =
    props?.page;

  return (
    <>
      <LayoutMeta
        title={title}
        canonical={slug}
        description={pageDescription?.description}
        robots={robots?.split(',')}
        useReCaptcha={useReCaptcha}
      />
      <Layout layout={layout} />
    </>
  );
}

export async function getStaticPaths() {
  const pageData: PagesQuery = await graphQLClient.request(PagesDocument);

  return {
    paths: (pageData?.pages ?? []).map((page) => page.slug),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const params = context.params?.url;
  const pageUrl = params ? (params as string[]).join('/') : undefined;

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
      ...(layoutData ?? {}),
    },
    revalidate: 60 * 60 * 24, // every day
  };
};
