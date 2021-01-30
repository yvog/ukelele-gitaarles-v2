import classNames from 'classnames'
import styles from './button.module.scss'
import { PropsWithChildren } from 'react'

type ButtonComponentProps = PropsWithChildren<{
  filled?: boolean
  href: string
  disabled?: boolean
  onClickHandler?: (e: any) => void
}>
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  filled = false,
  href,
  disabled = false,
  onClickHandler,
}) => {
  return (
    <a
      onClick={onClickHandler}
      href={href}
      className={classNames(styles.button, { [styles.filled]: filled }, { [styles.disabled]: disabled })}
    >
      {children}
    </a>
  )
}

export const Button = ButtonComponent
