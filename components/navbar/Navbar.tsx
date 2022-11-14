//import Link from 'next/link';
import React from 'react';
import NavItem from './NavItem';
import { useRouter } from 'next/router';
import KovzySvgIcon from "../common/svg/KovzySvgIcon";
import Link from "next/link";
const Navbar: React.FC = () => {
   const router = useRouter();
   const MENU_LIST: { text: string; href: string }[] = [
      { text: '', href: '' },
      // { text: 'Home', href: '/' },
      { text: 'Personal info', href: '/profile/personal-info' },
      { text: 'Payment methods', href: '/profile/payments' },
      // { text: "Addresses", href: "/profile/addresses" },
      // { text: "Order history", href: "/profile/order-history" },
   ];

   const userBtn = (
      <div className='flex flex-1 justify-center px-2 pb-2 '>
         <div className="pt-1 absolute">
            <Link href={'/'}>
               <div><KovzySvgIcon /></div>
            </Link>
         </div>
         <div className='flex flex-1 justify-end '>
            <div className="flex flex-row ">
               <div className='dropdown-end dropdown'>
                  <label tabIndex={0} className='btn btn-circle swap swap-rotate'>
                     user
                  </label>
                  <ul
                     tabIndex={0}
                     className='dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow'
                  >
                     <li>
                        <select className="select w-full max-w-xs">
                           <option disabled selected>language</option>
                           <option>GE</option>
                           <option>US</option>
                           <option>LA</option>
                        </select>
                     </li>
                     <li>
                        <a>log out </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

      </div>
   );

   return (
      <header>
         <nav className={`nav min-w-96 m-auto mt-6 max-w-6xl container mx-auto`}>
            {userBtn}
            <div className='navbar rounded-box'>
               <div className='nav__menu-list w-full border-b-0 sm:border-b-2 border-solid border-gray-300 px-3 sm:px-0'>
                  <div className='tabs w-full sm:w-auto -mb-0.5'>
                     {MENU_LIST.map((menu) => (
                        <NavItem key={menu.text} {...menu} router={router} />
                     ))}
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
