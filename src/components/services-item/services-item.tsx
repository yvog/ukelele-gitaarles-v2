import { ServicesContentItemFragment } from '../../gql/graphql';
import { transformHygraphImage } from '../../util/util';
import styles from './services-item.module.scss';

type ServicesItemProps = ServicesContentItemFragment;

export const ServicesItem: React.FC<ServicesItemProps> = ({
  background,
  firstTitle,
  secondTitle,
  url,
}) => {
  return (
    <div className={styles.item_container}>
      <a href={url} className={styles.services_item}>
        <img
          src={transformHygraphImage(background.url, 300, 200)}
          width="300"
          height="200"
          alt={`${firstTitle} & ${secondTitle}`}
          loading="eager"
        />

        <h3>
          {firstTitle}
          <span className={styles.divider}></span>
          {secondTitle}
        </h3>
      </a>
    </div>
  );
};
