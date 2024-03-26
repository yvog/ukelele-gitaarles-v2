import Image from 'next/image';
import Link from 'next/link';
import { ServicesContentItemFragment } from '../../gql/graphql';
import { transformHygraphImage } from '../../util/client';
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
      <Link href={url}>
        <a className={styles.services_item}>
          <Image
            src={transformHygraphImage(background.url, 300, 200)}
            alt={`${firstTitle} & ${secondTitle}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          <h3>
            {firstTitle}
            <span className={styles.divider}></span>
            {secondTitle}
          </h3>
        </a>
      </Link>
    </div>
  );
};
