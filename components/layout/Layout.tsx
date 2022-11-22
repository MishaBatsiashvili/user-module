import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Layout: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className='flex h-full flex-col'>
         <Navbar />
         <div className='flex flex-grow flex-col pb-4'>{children}</div>
      </div>
   );
};
export default Layout;
