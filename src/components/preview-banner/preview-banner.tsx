import React from 'react';
import styles from './preview-banner.module.scss';

type PreviewBannerProps = unknown;

export const PreviewBanner: React.FC<PreviewBannerProps> = () => {
  return (
    <div className={styles.preview_banner}>
      Je bekijkt de huidige pagina in preview modus.
    </div>
  );
};
