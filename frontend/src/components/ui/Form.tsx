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
        'border-gradient w-full max-w-[280px] rounded-[16px] px-[13px] pt-[16px] pb-[21px] shadow-[0_0_90px_rgba(0,255,209,0.2)]',
        disabled && 'pointer-events-none opacity-60',
        className
      )}
      style={{
        backdropFilter: 'blur(20px)',
      }}
      onSubmit={onSubmit}
    >
      <p className="mb-[10px] flex items-center text-[14px] font-bold">
        <span
          className={cn(
            'text-10px mr-[10px] flex h-[20px] w-[22px] flex-none items-center justify-center rounded-[4px] bg-[rgba(255,255,255,0.4)]'
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
