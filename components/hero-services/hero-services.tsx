import classNames from 'classnames';
import {HeroServicesItem} from '..';
import styles from './hero-services.module.scss';

export function HeroServices() {
    return (
        <section className={classNames(styles.hero_services, 'container')}>
            <div className="row">
                <HeroServicesItem />
                <HeroServicesItem />
                <HeroServicesItem />
            </div>
        </section>
    )
};