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
  const iconProps: JSX.IntrinsicElements['object'] = {
    width: 18,
    height: 18,
    'aria-hidden': true,
    tabIndex: -1,
  };

  return (
    <button
      type="button"
      onClick={onMenuOpen}
      className={styles.menu_button}
      aria-label="Toggle menu"
    >
      {open ? (
        <object data={iconOpened} {...iconProps}>
          icon close
        </object>
      ) : (
        <object data={iconClosed} {...iconProps}>
          icon open
        </object>
      )}
    </button>
  );
};
