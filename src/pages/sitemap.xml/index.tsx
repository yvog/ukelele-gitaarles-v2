// pages/server-sitemap.xml/index.tsx
import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';
import { graphQLClient } from '../../client';
import { MAX_PAGES } from '../../consts';
import { PagesDocument, PagesQuery } from '../../gql/graphql';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageData: PagesQuery = await graphQLClient.request(PagesDocument, {
    first: MAX_PAGES,
  });

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  const fields = pageData.pages
    .filter(({ robots }) => {
      const pageRobots = robots?.split(',');
      return !pageRobots || !pageRobots.includes('noindex');
    })
    .map(({ slug }) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    })) as ISitemapField[];

  // invalidate cache after 24 hours
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate'
  );

  return getServerSideSitemap(context as unknown as any, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
