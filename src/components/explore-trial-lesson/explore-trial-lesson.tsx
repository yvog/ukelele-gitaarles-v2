import classnames from 'classnames';
import Image from 'next/image';
import { Button } from '..';
import { ButtonFragment, ExploreTrialLessonFragment } from '../../gql/graphql';
import styles from './explore-trial-lesson.module.scss';

type ExploreTrialLessonProps = ExploreTrialLessonFragment;

export const ExploreTrialLesson: React.FC<ExploreTrialLessonProps> = (
  props: ExploreTrialLessonProps
) => {
  const { title, description, button } = props;
  const { slug, label } = button as ButtonFragment;

  return (
    <section className={styles.explore_signup}>
      <div className={styles.explore_signup_inner}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          {button && <Button href={slug}>{label}</Button>}
        </div>

        <Image
          src="/images/background/blue_background.webp"
          alt="background"
          layout="fill"
          objectFit="fill"
          loading="lazy"
          quality={100}
          className={classnames(
            'section_background',
            styles.explore_signup_background
          )}
        />
      </div>

      <div className={classnames(styles.backdrop_image)}>
        <Image
          src="/images/background/explore_signup_background_1600x450.webp"
          alt="background"
          loading="lazy"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="section_background"
        />
      </div>
    </section>
  );
};
