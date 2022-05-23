import styles from './menu-button.module.scss'

type MenuButtonComponentProps = {
  onMenuOpen: () => void
  icon: string
}

const MenuButtonComponent: React.FC<MenuButtonComponentProps> = ({ onMenuOpen, icon }) => {
  return (
    <button onClick={onMenuOpen} className={styles.menu_button} aria-label="Toggle menu">
      <img src={icon} width="18" height="18" alt={icon} />
    </button>
  )
}

export const MenuButton = MenuButtonComponent
