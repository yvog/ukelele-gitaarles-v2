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
      <object
        data={open ? iconOpened : iconClosed}
        width={18}
        height={18}
        aria-hidden="true"
        tabIndex={-1}
      >
        icon
      </object>
    </button>
  );
};
