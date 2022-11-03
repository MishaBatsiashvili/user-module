import React from 'react';
import Button from './Button';

const FullButton: React.FC<
   {
      children: React.ReactNode;
      onClick?: React.MouseEventHandler;
   } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className = '', onClick }) => {
   return (
      <Button onClick={onClick} className={`w-full ${className}`}>
         {children}
      </Button>
   );
};

export default FullButton;
