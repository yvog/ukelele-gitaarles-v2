import styles from './menu-button.module.scss'

type MenuButtonComponentProps = {
  onMenuOpen: () => void
  label: string
  icon: string
}

const MenuButtonComponent: React.FC<MenuButtonComponentProps> = ({ onMenuOpen, label, icon }) => {
  return (
    <button onClick={onMenuOpen} className={styles.menu_button}>
      <img src={icon} width="18" height="18" alt={icon} /> {label}
    </button>
  )
}

export const MenuButton = MenuButtonComponent
