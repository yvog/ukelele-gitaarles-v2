import classnames from 'classnames';
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

        <img
          src="/images/background/blue_background.webp"
          alt="blue background"
          loading="lazy"
          width={446}
          height={300}
          className={classnames(
            'section_background',
            styles.explore_signup_background
          )}
        />
      </div>

      <picture>
        <source
          media="(min-width:1200px)"
          srcSet="/images/background/explore_signup_background_1600x450.webp"
        />
        <source
          media="(min-width:0)"
          srcSet="/images/background/explore_signup_background_1024x576.webp"
        />
        <img
          src="/images/background/explore_signup_background_1600x450.webp"
          alt="explore signup background"
          loading="lazy"
          className={classnames('section_background', styles.backdrop_image)}
          width={1600}
          height={450}
        />
      </picture>
    </section>
  );
};
