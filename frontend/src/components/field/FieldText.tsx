import React from 'react';
import _ from 'lodash';
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
        className="w-full px-[13px] min-h-[50px] text-[14px] tracking-wide color-white border-gradient-success2 rounded-[6px]"
        placeholder={placeholder}
        {...register(name)}
      />
    </label>
  );
};

export default FieldText;
