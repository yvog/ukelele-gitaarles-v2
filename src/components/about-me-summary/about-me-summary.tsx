import classNames from 'classnames';
import Link from 'next/link';
import { AboutMeSummaryFragment, ButtonFragment } from '../../gql/graphql';
import { transformHygraphImage } from '../../util/client';
import styles from './about-me-summary.module.scss';
import Image from 'next/image';

type AboutMeSummaryProps = AboutMeSummaryFragment;

export const AboutMeSummary: React.FC<AboutMeSummaryProps> = ({
  photo: { url },
  name,
  aboutMe: { html },
  button,
}) => {
  const { slug, label } = button as ButtonFragment;

  return (
    <div className="main-container">
      <section className={classNames(styles.about_me_summary, 'container')}>
        <h2>{name}</h2>
        <div className={styles.about_me_summary_inner}>
          <div className={styles.image}>
            <Image
              src={transformHygraphImage(url, 550, 413)}
              alt={name}
              width={550}
              height={413}
              loading="lazy"
              layout="fixed"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Link href={slug}>
              <a className="text">{label}</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
