import classNames from 'classnames';
import styles from './usp-item.module.scss';

export function UspItem({
    children,
    icon
}) {
    return (
        <article className={classNames(styles.usp_item, 'col-md-4')}>
            <img src={icon} alt={icon} width="60" height="60" />
            <p>
                {children}
           </p>
        </article>
    )
};