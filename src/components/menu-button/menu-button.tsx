import styles from './menu-button.module.scss'

type MenuButtonComponentProps = {
  onMenuOpen: () => void
  open?: boolean
  iconClosed: string
  iconOpened: string
}

const MenuButtonComponent: React.FC<MenuButtonComponentProps> = ({
  onMenuOpen,
  open,
  iconClosed,
  iconOpened,
}) => {
  return (
    <button onClick={onMenuOpen} className={styles.menu_button} aria-label="Toggle menu">
      <img
        src={open ? iconOpened : iconClosed}
        width="18"
        height="18"
        alt="menu icon"
        loading="eager"
        aria-hidden="true"
      />
    </button>
  )
}

export const MenuButton = MenuButtonComponent
