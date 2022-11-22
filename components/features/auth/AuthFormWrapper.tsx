import React from 'react';
import Box from '../../layout/Box';

const AuthFormWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className='mx-auto max-w-6xl py-7'>
         <Box
            className={`mx-auto w-authWrapper-mobile items-center sm:w-[520px]`}
         >
            {children}
         </Box>
      </div>
   );
};

export default AuthFormWrapper;
