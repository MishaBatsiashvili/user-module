import React from 'react';

const Button: React.FC<
   {
      children: React.ReactNode;
      onClick?: React.MouseEventHandler;
   } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className = '', onClick }) => {
   return (
      <button
         onClick={onClick}
         className={`group btn relative mb-2 ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;
