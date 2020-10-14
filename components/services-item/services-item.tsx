
import classNames from 'classnames';
import styles from './services-item.module.scss';

type ServicesItemComponentProps = {
    src: string;
    firstTitle: string;
    secondTitle: string;
};

export const ServicesItemComponent: React.FC<ServicesItemComponentProps> = ({
    src,
    firstTitle,
    secondTitle
}) => {
    return (
        <>
            <div className={classNames('col-lg-4')}>
                <div className={classNames(styles.services_item)}>
                    <img src={src} width="300" height="200" alt={src} />
                    <h3>
                        {firstTitle}
                        <span className={styles.divider}></span>
                        {secondTitle}
                    </h3>
                </div>
            </div>
        </>
    )
};

export const ServicesItem = ServicesItemComponent;