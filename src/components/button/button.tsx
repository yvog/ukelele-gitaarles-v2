import classNames from 'classnames';
import React, { useRef } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  filled?: boolean;
  href: string;
  disabled?: boolean;
  onClickHandler?: (e: any) => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  filled = false,
  href,
  disabled = false,
  onClickHandler,
}) => {
  const isSmoothScrollBtn = href.startsWith('#') && href.length > 1;
  const ref = useRef<HTMLAnchorElement>(null);

  const smoothScrollIntoView = (e: React.MouseEvent) => {
    e.preventDefault();

    document.querySelector(ref.current.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <a
      href={href}
      ref={ref}
      onClick={isSmoothScrollBtn ? smoothScrollIntoView : onClickHandler}
      className={classNames(
        styles.button,
        { [styles.filled]: filled },
        { [styles.disabled]: disabled }
      )}
    >
      {children}
    </a>
  );
};
