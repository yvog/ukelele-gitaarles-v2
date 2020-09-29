import styles from './hero-services-item.module.scss';
import classNames from 'classnames';

export function HeroServicesItem() {
    return (
        <article className={classNames(styles.hero_services_item, 'col-md-4')}>
            <img src="/images/icon_guitar.svg" width="60" height="60"/>
            <h3>Ukelele / Gitaarles</h3>
            <p>Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen.</p>
        </article>
    )
};