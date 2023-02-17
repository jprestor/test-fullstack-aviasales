import React from 'react';
import cn from 'classnames';

interface IFieldValues {
  onClick: () => void;
  href: string;
  children: any;
  className: string;
}

const FieldSocialShare: React.FC<IFieldValues> = ({
  onClick,
  href,
  children,
  className,
}) => {
  return (
    <a
      className={cn(className, 'rounded-full')}
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default FieldSocialShare;
