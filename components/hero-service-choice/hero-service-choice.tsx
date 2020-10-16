import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { Button, HeaderNavigation } from '..';
import styles from './hero-service-choice.module.scss';

export const HeroServiceChoiceComponent: React.FC = () => {

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
            <div ref={myRef} className={classNames(styles.hero_service_choice, styles.hero, styles.blue)}>
                <HeaderNavigation />

                <section className="row">
                    <article className="col-lg-6">
                        <img src="/images/misc/guitar.png" width="150" height="350" alt="" />
                        <h2>Gitaar</h2>
                        <p>Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.</p>
                        <Button href="/aanmelden">Ik wil gitaarles</Button>
                    </article>
                    <article className="col-lg-6">
                        <img src="/images/misc/ukelele.png" width="150" height="350" alt="" />
                        <h2>Ukelele</h2>
                        <p>Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.</p>
                        <Button href="/aanmelden">Ik wil ukeleleles</Button>
                    </article>
                </section>
            </div>
        </>
    );
};

export const HeroServiceChoice = HeroServiceChoiceComponent;