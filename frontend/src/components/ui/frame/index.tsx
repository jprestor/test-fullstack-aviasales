import React from 'react';
import cx from 'classnames';

interface IFrame {
  title: string;
  num: number;
  disabled?: boolean;
  children: any;
  className?: string;
}

const Frame: React.FC<IFrame> = ({
  title,
  num,
  disabled,
  children,
  className,
}) => {
  const classes = cx(
    'bg-[rgba(5,12,48,0.4)] shadow-[0_0_90px_rgba(0,255,209,0.2)] rounded-[16px]',
    disabled && 'opacity-60',
    className
  );

  return (
    <div className={classes} style={{ backdropFilter: 'blur(20px)' }}>
      <p className="mb-[10px] text-[14px] font-bold">{title}</p>
      <span
        className={cx(
          'w-[22px] h-[20px] rounded-[4px] text-10px bg-[rgba(255,255,255,0.4)]'
        )}
        style={{
          backdropFilter: 'blur(3.5px)',
          textShadow: '0 1px 2px rgba(2, 0, 83, 0.21)',
        }}
      >
        {num}
      </span>
      {children}
    </div>
  );
};

export default Frame;
