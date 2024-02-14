import { AboutMeFullFragment } from '../../gql/graphql';
import { ContentBlock } from '../content-block/content-block';
import styles from './about-me-full.module.scss';

type AboutMeFullProps = AboutMeFullFragment;

export const AboutMeFull: React.FC<AboutMeFullProps> = ({
  name,
  aboutMeText,
  photo,
}) => {
  return (
    <div className={styles.content}>
      <ContentBlock
        contentBlockTitle={name}
        image={photo}
        assetWidth={550}
        assetHeight={413}
        assetClassName={styles.image}
        swapOnMobile
        text={aboutMeText}
      />
    </div>
  );
};
