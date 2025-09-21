import { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  htmlType?: 'button' | 'reset' | 'submit';
  buttonType?: 'link' | 'base';
  children?: ReactNode;
};

const proceedButtonType = (type: 'link' | 'base') => {
  switch (type) {
    case 'base':
      return styles.base;
    case 'link':
      return styles.link;
  }
};

export const Button: FC<ButtonProps> = ({
  htmlType = 'button',
  buttonType = 'base',
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      className={`${className || ''} ${proceedButtonType(buttonType)}`}
      type={htmlType}
      {...restProps}
    >
      {children}
    </button>
  );
};
