import classNames from 'classnames';
import {useEffect, useRef} from 'react';
import styles from './hero-wrapper.module.scss';

type HeroWrapperComponentProps = {
    classes: string[];
    blue?: boolean;
    children: React.ReactNode;
};

export const HeroWrapperComponent: React.FC<HeroWrapperComponentProps> = ({
    classes,
    children,
    blue = false
}) => {

    const MIN_HEIGHT = 960;

    const myRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', onResize);
        onResize();
    }, []);

    const onResize = () => {
        myRef.current.style.height = Math.max(window.innerHeight, MIN_HEIGHT) + 'px';
    }

    return (
        <div ref={myRef} className={classNames([styles.hero, ...classes, {[styles.blue]: blue}])}>
            {children}
        </div>
    );
};

export const HeroWrapper = HeroWrapperComponent;