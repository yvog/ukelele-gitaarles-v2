import classNames from 'classnames';
import styles from './button.module.scss';

type ButtonComponentProps = {
    filled?: boolean;
    children?: React.ReactNode;
    href: string;
    onClickHandler: (e: any) => void;
};
const ButtonComponent: React.FC<ButtonComponentProps> = ({
    children,
    filled = false,
    href,
    onClickHandler
}) => {
    return (
        <a onClick={onClickHandler} href={href} className={classNames(styles.button, {[styles.button_filled]: filled})}>
            {children}
        </a>
    );
};

export const Button = ButtonComponent;