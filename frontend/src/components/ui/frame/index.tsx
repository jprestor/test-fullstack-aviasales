import React from 'react';
import cx from 'classnames';

interface IFrame {
  disabled: boolean;
  children: any;
  className?: string;
}

const Frame: React.FC<IFrame> = ({ disabled, children, className }) => {
  const classes = cx(
    'bg-[rgba(5,12,48,0.4)] shadow-[0_0_90px_rgba(0,255,209,0.2)] rounded-[16px]',
    disabled && 'opacity-60',
    className
  );

  return (
    <div className={classes} style={{ backdropFilter: 'blur(20px)' }}>
      {children}
    </div>
  );
};

export default Frame;
