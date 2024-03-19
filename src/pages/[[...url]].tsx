import { GetStaticProps } from 'next';
import { graphQLClient, graphQLClientPreview } from '../client';
import { Page } from '../components';
import { PreviewPageProps } from '../components/page/page';
import { MAX_PAGES, REVALIDATE_PAGE_AFTER_SECONDS } from '../consts';
import {
  LayoutDocument,
  LayoutQuery,
  PagesDocument,
  PagesQuery,
} from '../gql/graphql';

type PageProps = LayoutQuery & PreviewPageProps;

export default function Index(props: PageProps) {
  const { page, preview } = props;

  return (
    <Page
      {...page}
      description={page?.pageDescription?.description}
      robots={page?.robots?.split(',')}
      preview={preview}
    />
  );
}

export async function getStaticPaths() {
  const pageData: PagesQuery = await graphQLClient.request(PagesDocument, {
    first: MAX_PAGES,
  });

  return {
    paths: (pageData?.pages ?? [])
      .filter(({ robots }) => {
        const pageRobots = robots?.split(',');
        return !pageRobots || !pageRobots.includes('noindex');
      })
      .map((page) => page.slug),
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const params = context.params?.url;
  const pageUrl = params ? (params as string[]).join('/') : undefined;
  const isPreviewMode = !!context?.preview;
  let client = isPreviewMode ? graphQLClientPreview : graphQLClient;

  const layoutData: LayoutQuery = await client.request(LayoutDocument, {
    slug: pageUrl ? `/${pageUrl}` : '/',
    stage: isPreviewMode ? 'DRAFT' : 'PUBLISHED',
  });

  if (!layoutData?.page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(layoutData ?? {}),
      preview: !!context?.preview,
    },
    revalidate: REVALIDATE_PAGE_AFTER_SECONDS,
  };
};
