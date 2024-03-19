import classNames from 'classnames';
import Link from 'next/link';
import { AboutMeSummaryFragment, ButtonFragment } from '../../gql/graphql';
import { transformHygraphImage } from '../../util/client';
import styles from './about-me-summary.module.scss';

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
          <img
            src={transformHygraphImage(url, 550, 413)}
            alt={name}
            width={240}
            height={240}
            loading="lazy"
          />
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
