import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface IButton {
  disabled?: boolean;
  children: any;
  className?: string;
  type?: 'submit' | 'button';
  to?: string;
  onClick?: () => {};
}

const Button: React.FC<IButton> = ({
  disabled,
  children,
  onClick,
  type,
  to,
  className,
}) => {
  const classes = cn(
    'flex justify-center items-center px-[15px] min-h-[48px] text-[16px] font-black tracking-wide bg-[url(/btn-success.svg)] bg-cover rounded-[12px] hover:bg-[url(/btn-hover.svg)] active:bg-[url(/btn-pressed.svg)] transition',
    disabled && 'opacity-60 pointer-events-none',
    className
  );

  return to ? (
    <Link className={classes} onClick={onClick} type={type} to={to}>
      {children}
    </Link>
  ) : (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
