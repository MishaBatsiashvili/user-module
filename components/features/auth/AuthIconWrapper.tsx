import React from 'react';

const AuthIconWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className='inline-flex items-center mr-3'>{children}</div>
   );
};

export default AuthIconWrapper;
