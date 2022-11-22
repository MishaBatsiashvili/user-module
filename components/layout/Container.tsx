import React from 'react';

const Container: React.FC<{
   children: React.ReactNode;
   className?: string;
}> = ({ children, className }) => {
   return (
      <div
         className={`container mx-auto mt-6 px-4 lg:px-0 xl:max-w-6xl ${className}`}
      >
         {children}
      </div>
   );
};

export default Container;
