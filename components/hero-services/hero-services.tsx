import styles from './hero-services.module.scss';

export function HeroServices({
    children
}) {
    return (
        <div className={styles.hero_services}>
            {children}
        </div>
    )
};