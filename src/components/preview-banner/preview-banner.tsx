import React from 'react';
import styles from './preview-banner.module.scss';
import Link from 'next/link';

type PreviewBannerProps = unknown;

export const PreviewBanner: React.FC<PreviewBannerProps> = () => {
  return (
    <div className={styles.preview_banner}>
      <p>Je bekijkt de huidige pagina in preview modus.</p>
      <Link href="/api/preview/clear" prefetch={false} passHref>
        <a className="link">Sluit preview</a>
      </Link>
    </div>
  );
};
