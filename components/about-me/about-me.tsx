import classNames from 'classnames';
import {UspBar} from '..';
import styles from './about-me.module.scss';

const AboutMeComponent: React.FC = () => {
    return (
        <section className={classNames(styles.about_me, 'main-container')}>
            <h2>Bert Geldhof</h2>

            <div className="row">
                <div className={classNames(styles.about_me_content, 'col-lg-6')}>
                    <p>
                        Op jonge leeftijd ben ik begonnen met het maken van muziek. Ooit begonnen met blokfluitspelen, waardoor mijn brede interesse in muziek is ontstaan.
                    </p>
                    <UspBar />
                </div>
                <div className='col-lg-6'>
                    <img className={classNames(styles.about_me_image)} src="/images/misc/bert_geldhof.jpg" alt="Bert Geldhof" width="380" height="524" />
                </div>
            </div>
        </section>
    )
};

export const AboutMe = AboutMeComponent;