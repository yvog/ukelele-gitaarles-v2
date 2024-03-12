import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import SyncLoader from 'react-spinners/SyncLoader';
import { graphQLClient, graphQLClientPreview } from '../client';
import { Layout, LayoutMeta, PreviewBanner } from '../components';
import { MAX_PAGES, REVALIDATE_PAGE_AFTER_SECONDS } from '../consts';
import {
  LayoutDocument,
  LayoutQuery,
  PagesDocument,
  PagesQuery,
} from '../gql/graphql';

type PageProps = LayoutQuery & {
  preview?: boolean;
};

export default function Index(props: PageProps) {
  const router = useRouter();

  if (router?.isFallback) {
    return (
      <div className="spinner">
        <SyncLoader size={16} color="#1193f5" loading />
      </div>
    );
  }

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
      {props.preview && <PreviewBanner />}
      <Layout layout={layout} />
    </>
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
