import React from 'react';

const AuthIconWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className='inline-flex items-center left-4 absolute'>{children}</div>
   );
};

export default AuthIconWrapper;
