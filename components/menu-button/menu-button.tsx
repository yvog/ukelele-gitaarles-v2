import styles from './menu-button.module.scss';

type MenuButtonComponentProps = {
    onMenuOpen: () => void;
    label: string;
};

const MenuButtonComponent: React.FC<MenuButtonComponentProps> = ({
    onMenuOpen,
    label
}) => {
    return (
        <button onClick={onMenuOpen} className={styles.menu_button}>
            <img src="/images/icons/menu.svg" width="40" height="40" alt="menu" /> {label}
        </button>
    );
};

export const MenuButton = MenuButtonComponent;