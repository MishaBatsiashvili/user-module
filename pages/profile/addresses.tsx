import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";

export function Addrres() {
   const [navActive, setNavActive] = useState(false);

   return (
      <>
         <Navbar navActive={navActive} setNavActive={setNavActive} />
         <div className='profile-form'>
            <div> addrresss</div>
         </div>
      </>
   );
}
export default Addrres;
