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
        className="color-white border-gradient-success2 min-h-[5.7vh] w-full rounded-[0.7vh] px-[1.5vh] text-[1.6vh] tracking-wide placeholder:text-[1.6vh]"
        placeholder={placeholder}
        {...register(name)}
      />
    </label>
  );
};

export default FieldText;
