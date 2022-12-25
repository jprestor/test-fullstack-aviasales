import React from 'react';
import cx from 'classnames';

interface IButton {
  disabled: boolean;
  children: any;
  className?: string;
  onClick?: () => {};
}

const Button: React.FC<IButton> = ({
  disabled,
  children,
  onClick,
  className,
}) => {
  const classes = cx(
    'flex min-h-[48px] bg-[#2BBB49] rounded-[12px]',
    disabled && 'opacity-60',
    className
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
