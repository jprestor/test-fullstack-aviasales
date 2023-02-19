import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';

interface IButton {
  children: string | ReactElement;
  className?: string;
  type?: 'submit' | 'button';
  to?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  disabled,
  children,
  onClick,
  type,
  to,
  loading,
  className,
}) => {
  const classes = cn(
    'relative flex justify-center items-center px-[1.7vh] min-h-[5.5vh] text-[1.8vh] font-black tracking-wide  bg-[url(/btn-success.svg)] bg-cover rounded-[1.2vh] hover:bg-[url(/btn-hover.svg)] active:bg-[url(/btn-pressed.svg)] transition',
    disabled && 'opacity-60 pointer-events-none',
    loading && 'opacity-90 pointer-events-none',
    className
  );

  return to ? (
    <Link className={classes} onClick={onClick} type={type} to={to}>
      {children}
      {loading && <ClipLoader color="#36d7b7" />}
    </Link>
  ) : (
    <button className={classes} onClick={onClick} type={type}>
      {children}
      {loading && (
        <ClipLoader
          className="absolute top-[16%] right-[3vh]"
          color="#36d7b7"
          size="3.5vh"
        />
      )}
    </button>
  );
};

export default Button;
