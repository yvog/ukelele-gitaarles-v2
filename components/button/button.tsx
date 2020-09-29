import classNames from 'classnames';
import styles from './button.module.scss';

export function Button({
    children,
    filled = false,
    href
}) {
    return (
        <a href={href} className={classNames(styles.button, {filled: filled})} >
            {children}
        </a>
    )
};