import { GA4 } from '../ga4/ga4';
import { LayoutMeta, LayoutMetaProps } from '../layout-meta/layout-meta';
import { Layout, LayoutProps } from '../layout/layout';
import { PreviewBanner } from '../preview-banner/preview-banner';

export type PreviewPageProps = {
  preview?: boolean;
};

type PageProps = PreviewPageProps & LayoutMetaProps & LayoutProps;

export const Page: React.FC<PageProps> = (props) => {
  // const { consent } = useCookieConsentContext();
  // const cookiePreferencesUnknown = typeof consent.thirdParty == 'undefined';

  return (
    <>
      <LayoutMeta {...props} />
      {props.preview && <PreviewBanner />}
      {/* {cookiePreferencesUnknown && <CookieBanner />} */}
      <GA4 />
      <Layout {...props} />
    </>
  );
};
