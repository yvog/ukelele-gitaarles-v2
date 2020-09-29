import styles from './testimonials.module.scss';
import {Button} from '../button/button';

export function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <h2>Anderen zijn je voorgegaan</h2>
            <div className="flickitythingy">
                <article>
                    <h3>Rosa van Dalen</h3>
                    <span>50 jaar</span>
                    <p>Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!</p>
                </article>
            </div>
            <Button href="/aanmelden">Begin met muziek maken</Button>
        </section>
    )
};