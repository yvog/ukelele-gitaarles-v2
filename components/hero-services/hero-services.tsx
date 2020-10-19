import classNames from 'classnames';
import {HeroServicesItem} from '..';
import styles from './hero-services.module.scss';

const HeroServicesComponent: React.FC = () => {
    return (
        <section className={classNames(styles.hero_services, 'container')}>
            <div className="row">

                <HeroServicesItem icon="/images/icon/icon_guitar.svg" title="Ukelele / Gitaarles">
                    Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen.
                </HeroServicesItem>

                <HeroServicesItem icon="/images/icon/icon_piano.svg" title="Piano / Keyboardles">
                    Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen.
                </HeroServicesItem>

                <HeroServicesItem icon="/images/icon/icon_wrench.svg" title="Reparatie / Onderhoud">
                    Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen.
                </HeroServicesItem>

            </div>
        </section>
    )
};

export const HeroServices = HeroServicesComponent;