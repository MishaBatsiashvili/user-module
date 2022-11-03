import React from 'react';
import s from './styles.module.css';

const AuthFormWrapper: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div
         className={`${s['auth-form']} mx-7 w-[520px] items-center rounded-md bg-white px-7 pt-8 pb-7 shadow-2xl ring-1 ring-gray-200`}
      >
         {children}
      </div>
   );
};

export default AuthFormWrapper;
