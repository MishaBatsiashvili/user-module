import type { NextPage } from 'next';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
const Home: NextPage = () => {
   const [navActive, setNavActive] = useState(false);
   console.log(navActive);

   return (
      <>
         <Navbar navActive={navActive} setNavActive={setNavActive} />
         <div className='auth-form'>

            {/* <Icon icon={faAddressBook}/> */}
            <Link href='/auth/login'>
               <button className='btn mr-2'>login</button>
            </Link>
            <Link href='/auth/register'>
               <button className='btn ml-2'>register</button>
            </Link>
            <Icon icon={faAddressBook} />
            <Link href='/profile/'>
               <button className='btn ml-2'>profile</button>
            </Link>
         </div>
      </>
   );
};

export default Home;
