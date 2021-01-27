import classNames from 'classnames'
import styles from './hero-wrapper.module.scss'

type HeroWrapperComponentProps = {
  classes: string[]
  blue?: boolean
  children: React.ReactNode
  forceMinHeight?: number
}

export const HeroWrapperComponent: React.FC<HeroWrapperComponentProps> = ({ classes, children, blue = false }) => {
  //const containerRef = useRef(null);
  //const MIN_HEIGHT = forceMinHeight ?? 800;

  // useEffect(() => {
  //     window.addEventListener('resize', onResize);
  //     onResize();
  // }, []);

  // const onResize = useCallback(() => {
  //     containerRef.current && (containerRef.current.style.height = `${Math.max(window.innerHeight, MIN_HEIGHT)}px`);
  // }, [containerRef])

  return <div className={classNames([styles.hero, ...classes, { [styles.blue]: blue }])}>{children}</div>
}

export const HeroWrapper = HeroWrapperComponent
