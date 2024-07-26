import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../button/button';
import styles from './preview-banner.module.scss';

type PreviewBannerProps = unknown;

export const PreviewBanner: React.FC<PreviewBannerProps> = () => {
  const router = useRouter();

  return (
    <div className={styles.preview_banner}>
      <p>Je bekijkt de huidige pagina in preview modus.</p>
      <Button
        onClick={async () => {
          try {
            const response = await fetch('/api/preview/clear');

            if (response.ok) {
              router.reload();
            }
          } catch (e) {
            console.error('error', e);
          }
        }}
        filled
      >
        Sluit preview
      </Button>
    </div>
  );
};
