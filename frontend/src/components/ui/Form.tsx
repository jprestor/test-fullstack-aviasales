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
        'border-gradient w-full max-w-[31.8vh] rounded-[1.5vh] px-[1.5vh] pt-[1.8vh] pb-[2.3vh] shadow-[0_0_90px_rgba(0,255,209,0.2)] sm:max-w-[35vh]',
        disabled && 'pointer-events-none opacity-60',
        className
      )}
      style={{
        backdropFilter: 'blur(20px)',
      }}
      onSubmit={onSubmit}
    >
      <p className="mb-[1.2vh] flex items-center text-[1.6vh] font-bold">
        <span
          className={cn(
            'mr-[1.2vh] flex h-[2.3vh] w-[2.4vh] flex-none items-center justify-center rounded-[0.5vh] bg-[rgba(255,255,255,0.4)] text-[1.2vh]'
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
