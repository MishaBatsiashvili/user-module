import React from 'react';
import Box from '../../layout/Box';

const AuthFormWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className='mx-auto max-w-6xl'>
         <Box
            className={`my-3 mx-auto w-authWrapper-mobile items-center sm:w-[520px] md:my-7`}
         >
            {children}
         </Box>
      </div>
   );
};

export default AuthFormWrapper;
