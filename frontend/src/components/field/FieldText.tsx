import React from 'react';
import cn from 'classnames';

interface IFieldValues {
  name: string;
  placeholder: string;
  register: any;
  className?: string;
}

const FieldText: React.FC<IFieldValues> = ({
  name,
  placeholder,
  register,
  className,
}) => {
  return (
    <label className={cn('block', className)}>
      <input
        className="color-white border-gradient-success2 min-h-[50px] w-full rounded-[6px] px-[13px] text-[14px] tracking-wide"
        placeholder={placeholder}
        {...register(name)}
      />
    </label>
  );
};

export default FieldText;
