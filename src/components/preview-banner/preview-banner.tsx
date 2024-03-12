import Link from 'next/link';
import React from 'react';
import styles from './preview-banner.module.scss';

type PreviewBannerProps = unknown;

export const PreviewBanner: React.FC<PreviewBannerProps> = () => {
  return (
    <div className={styles.preview_banner}>
      <span>Je bekijkt de huidige pagina in preview modus.</span>
      <Link href="/api/exit-preview" passHref>
        <a className="link">Sluit preview</a>
      </Link>
    </div>
  );
};
