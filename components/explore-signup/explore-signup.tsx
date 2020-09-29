import {Button} from '..';
import styles from './explore-signup.module.scss';

export function ExploreSignup() {
    return (
        <section className={styles.explore_signup}>

            <div className={styles.explore_signup_inner}>
                <h4>Ontdek het plezier in muziekmaken</h4>
                <p>Probeer een vrijblijvende proefles</p>
                <Button href="/aanmelden">Aanmelden</Button>
            </div>
        </section>
    )
};