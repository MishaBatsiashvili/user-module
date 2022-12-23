import React, { ButtonHTMLAttributes } from 'react';

export type ButtonPropsType = {
   children: React.ReactNode;
   onClick?: React.MouseEventHandler;
   className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
   ButtonHTMLAttributes<unknown>;

const Button: React.FC<ButtonPropsType> = ({
   children,
   className = '',
   onClick,
   disabled = false,
   type = 'submit',
}) => {
   return (
      <button
         type={type}
         disabled={disabled}
         onClick={onClick}
         className={`group btn relative mb-2 ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;
