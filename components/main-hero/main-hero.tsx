import {useEffect, useRef} from 'react';
import {Button, HeaderNavigation, HeroServices} from '..';
import styles from './main-hero.module.scss';

export const MainHeroComponent: React.FC = () => {

    const myRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', onResize);
        onResize();
    }, []);

    const onResize = () => {
        myRef.current.style.height = window.innerHeight + 'px';
    }

    return (
        <>
            <div ref={myRef} className={styles.main_hero}>
                <HeaderNavigation/>

                <section>
                    <article id={styles.hero_info}>
                        <h2>Bert Geldhof</h2>
                        <p>Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.</p>
                        <Button href="/aanmelden">Aanmelden</Button>
                    </article>
                </section>
            </div>

            <HeroServices />
        </>
    );
};

export const MainHero = MainHeroComponent;