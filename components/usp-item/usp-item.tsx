import classNames from 'classnames';
import styles from './usp-item.module.scss';

type UspItemProps = {
    icon?: string;
    children?: React.ReactNode;
};

export const UspItemComponent: React.FC<UspItemProps> = ({
    icon,
    children
}) => {
    return (
        <article className={classNames(styles.usp_item, 'col-md-4')}>
            <img src={icon} alt={icon} width="60" height="60" />
            <p>
                {children}
            </p>
        </article>
    )
};

export const UspItem = UspItemComponent;