import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";

export function History() {
   const [navActive, setNavActive] = useState(false);

   return (
      <>
         <Navbar navActive={navActive} setNavActive={setNavActive} />
         <div className='profile-form'>
            <div> order history</div>
         </div>
      </>
   );
}
export default History;
