import classNames from 'classnames'
import styles from './hero-wrapper.module.scss'
import { PropsWithChildren } from 'react'
import Image from 'next/image'

type HeroWrapperComponentProps = PropsWithChildren<{
  classes: string[]
  blue?: boolean
}>

export const HeroWrapperComponent: React.FC<HeroWrapperComponentProps> = ({ classes, children, blue = false }) => {
  return <div className={classNames([styles.hero, ...classes, { [styles.blue]: blue }])}>{children}</div>
}

export const HeroWrapper = HeroWrapperComponent
