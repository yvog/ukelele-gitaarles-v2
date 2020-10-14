import classNames from 'classnames';
import {UspBar} from '..';
import styles from './usp.module.scss';

export const UspComponent: React.FC = () => {
    return (
        <section className={classNames(styles.usp, 'container')}>
            <h4>Je hoeft er de deur niet voor uit, want ik bied de mogelijkheid om ukelele- en gitaarles bij jou thuis te geven.</h4>
            <UspBar />
        </section>
    )
};

export const Usp = UspComponent;