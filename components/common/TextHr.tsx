import React from 'react';

const TextHr: React.FC<{
   children?: React.ReactNode
}> = ({ children = null }) => {
   return (
      <>
         <div className='h-[1px] bg-gray-300'></div>
         <div className='hr-line text-gray-500'>{children}</div>
      </>
   );
};

export default TextHr;
