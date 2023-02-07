import React from 'react';
import cn from 'classnames';

interface IForm {
  title: string;
  num: number;
  disabled?: boolean;
  onSubmit: any;
  children: any;
  className?: string;
}

const Form: React.FC<IForm> = ({
  title,
  num,
  disabled,
  onSubmit,
  children,
  className,
}) => {
  return (
    <form
      className={cn(
        'pt-[16px] pb-[21px] px-[13px] max-w-[280px] w-full border-gradient shadow-[0_0_90px_rgba(0,255,209,0.2)] rounded-[16px]',
        disabled && 'opacity-60 pointer-events-none',
        className
      )}
      style={{
        backdropFilter: 'blur(20px)',
      }}
      onSubmit={onSubmit}
    >
      <p className="flex items-center mb-[10px] text-[14px] font-bold">
        <span
          className={cn(
            'flex-none flex justify-center items-center mr-[10px] w-[22px] h-[20px] rounded-[4px] text-10px bg-[rgba(255,255,255,0.4)]'
          )}
          style={{
            backdropFilter: 'blur(3.5px)',
            textShadow: '0 1px 2px rgba(2, 0, 83, 0.21)',
          }}
        >
          {num}
        </span>
        {title}
      </p>

      {children}
    </form>
  );
};

export default Form;
