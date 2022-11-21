import React from 'react';

const Button: React.FC<
   {
      children: React.ReactNode;
      onClick?: React.MouseEventHandler;
      disabled?: boolean | undefined;
   } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className = '', onClick, disabled = false }) => {
   return (
      <button
         disabled={disabled}
         onClick={onClick}
         className={`group btn relative mb-2 ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;
