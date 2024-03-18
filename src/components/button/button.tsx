import classNames from 'classnames';
import React, { useRef } from 'react';
import styles from './button.module.scss';

type BaseButtonProps = {
  children: React.ReactNode;
  filled?: boolean;
  outlineAlt?: boolean;
  disabled?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: never;
};

type OrdinaryButtonProps = BaseButtonProps & {
  href?: never;
  onClick: (e: any) => void;
};

type ButtonProps = LinkButtonProps | OrdinaryButtonProps;

const smoothScrollIntoView = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ref: React.MutableRefObject<HTMLAnchorElement>
) => {
  e.preventDefault();

  document.querySelector(ref.current.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  outlineAlt = false,
  filled = false,
  disabled = false,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  if (!!href) {
    const isSmoothScrollLink = href.startsWith('#') && href.length > 1;

    return (
      <a
        href={href}
        ref={ref}
        onClick={
          isSmoothScrollLink ? (e) => smoothScrollIntoView(e, ref) : undefined
        }
        className={classNames(styles.button, {
          [styles.outlineAlt]: outlineAlt,
          [styles.filled]: filled,
          [styles.disabled]: disabled,
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.outlineAlt]: outlineAlt,
        [styles.filled]: filled,
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};
