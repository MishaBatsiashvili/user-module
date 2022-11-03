import React from 'react';
import s from './styles.module.css';

const AuthFormWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div
         className={`${s['auth-form']} items-center rounded-md bg-white px-7 pt-8 pb-7`}
      >
         {children}
      </div>
   );
};

export default AuthFormWrapper;
