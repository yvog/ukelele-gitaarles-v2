import classNames from 'classnames'
import styles from './button.module.scss'
import React, { PropsWithChildren, useRef } from 'react'

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
  const isSmoothScrollBtn = href.startsWith('#') && href.length > 1
  const ref = useRef<HTMLAnchorElement>(null)

  const smoothScrollIntoView = (e: React.MouseEvent) => {
    e.preventDefault()

    document.querySelector(ref.current.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <a href={href} className={styles.button_link} ref={ref}>
      <button
        onClick={isSmoothScrollBtn ? smoothScrollIntoView : onClickHandler}
        className={classNames(
          styles.button,
          { [styles.filled]: filled },
          { [styles.disabled]: disabled }
        )}
      >
        {children}
      </button>
    </a>
  )
}

export const Button = ButtonComponent
