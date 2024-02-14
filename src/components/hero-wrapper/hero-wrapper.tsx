import classNames from 'classnames';
import React from 'react';
import styles from './hero-wrapper.module.scss';

type HeroWrapperProps = {
  children: React.ReactNode;
  classes: string[];
};

export const HeroWrapper: React.FC<HeroWrapperProps> = ({
  classes,
  children,
}) => {
  return (
    <div className={classNames([styles.hero, ...classes])}>{children}</div>
  );
};
