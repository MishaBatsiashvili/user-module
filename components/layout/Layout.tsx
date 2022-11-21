import React from 'react';
import Navbar from "../../components/navbar/Navbar";

const Layout: React.FC<
   {
      children: React.ReactNode;
   }> = ({ children }) => {
      return (
         <>
            <Navbar />
            {children}
         </>
      );
   };
export default Layout;
