import styles from './menu-button.module.scss';

type MenuButtonProps = {
  onMenuOpen: () => void;
  open?: boolean;
  iconClosed: string;
  iconOpened: string;
};

export const MenuButton: React.FC<MenuButtonProps> = ({
  onMenuOpen,
  open,
  iconClosed,
  iconOpened,
}) => {
  return (
    <button
      type="button"
      onClick={onMenuOpen}
      className={styles.menu_button}
      aria-label="Toggle menu"
    >
      <img
        src={open ? iconOpened : iconClosed}
        width="18"
        height="18"
        alt="menu icon"
        loading="eager"
        aria-hidden="true"
      />
    </button>
  );
};
