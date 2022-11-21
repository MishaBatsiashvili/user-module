import React from 'react';
import Button from './Button';

const FullButton: React.FC<
   {
      children: React.ReactNode;
      onClick?: React.MouseEventHandler;
      disabled?: boolean | undefined
   } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className = '', onClick, disabled = false }) => {
   return (
      <Button onClick={onClick} disabled={disabled} className={`w-full ${className}`}>
         {children}
      </Button>
   );
};

export default FullButton;
