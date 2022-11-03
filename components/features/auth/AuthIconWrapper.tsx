import React from 'react';

const AuthIconWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className='absolute left-4 inline-flex items-center'>{children}</div>
   );
};

export default AuthIconWrapper;
