import classnames from 'classnames'
import { Button } from '..'
import styles from './explore-signup.module.scss'

const ExploreSignupComponent: React.FC = () => {
  return (
    <section className={styles.explore_signup}>
      <div className={styles.explore_signup_inner}>
        <div>
          <h4>Ontdek het plezier in muziekmaken</h4>
          <p>
            Probeer een vrijblijvende proefles voor een
            <br />
            éénmalig verlaagd lestarief
          </p>
          <Button href="/aanmelden">Aanmelden</Button>
        </div>

        <img
          src="/images/background/blue_background.png"
          alt="blue background"
          loading="lazy"
          className={classnames('section_background', styles.explore_signup_background)}
        />
      </div>

      <picture>
        <source media="(min-width:1200px)" srcSet="/images/background/explore_signup_background.png" />
        <source media="(min-width:992px)" srcSet="/images/background/explore_signup_background.png" />
        <source media="(min-width:0)" srcSet="/images/background/explore_signup_background.png" />
        <img
          src="/images/background/explore_signup_background.png"
          alt="explore signup background"
          loading="lazy"
          className={classnames('section_background', styles.backdrop_image)}
        />
      </picture>
    </section>
  )
}

export const ExploreSignup = ExploreSignupComponent
