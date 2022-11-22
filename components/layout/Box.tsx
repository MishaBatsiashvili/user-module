import React from 'react';

const Box: React.FC<{
   children: React.ReactNode;
   className?: string;
}> = ({ children, className }) => {
   return (
      <div
         className={`rounded-md bg-white px-7 pt-8 pb-7 shadow-2xl ring-1 ring-gray-200 ${className}`}
      >
         {children}
      </div>
   );
};

export default Box;
