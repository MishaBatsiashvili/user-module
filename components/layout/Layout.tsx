import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";

const Layout: React.FC<
   {
      children: React.ReactNode;
   }> = ({ children }) => {
      const [navActive, setNavActive] = useState(false);

      return (
         <>
            <Navbar navActive={navActive} setNavActive={setNavActive} />
            {children}
         </>
      );
   };
export default Layout;

