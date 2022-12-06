import React from 'react';

export type ContainerPropsType = {
   children: React.ReactNode;
   className?: string;
   size?: 'sm' | 'md' | 'lg';
   marginClass?: string;
}  
/*
Container component should be used as an outermost wrapper to contain the elements using the
standartized size options.
*/
const Container: React.FC<ContainerPropsType> = ({ children, className, size = 'lg', marginClass = 'mt-6' }) => {
   let sizeClass = '';
   switch (size) {
      case 'sm':
         sizeClass = 'lg:max-w-4xl';
         break;
      case 'md':
         sizeClass = 'lg:max-w-5xl';
         break;
      case 'lg':
         sizeClass = 'lg:max-w-6xl';
         break;
      default:
         sizeClass = 'lg:max-w-6xl';
   }

   return (
      <div
         className={`container mx-auto ${marginClass} px-4 lg:px-2 ${sizeClass} ${className}`}
      >
         {children}
      </div>
   );
};

export default Container;
