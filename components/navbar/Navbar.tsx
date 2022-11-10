import Link from 'next/link';
import React from 'react';
import NavItem from './NavItem';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
   const router = useRouter();
   const MENU_LIST: { text: string; href: string }[] = [
      { text: 'Home', href: '/' },
      { text: 'Personal info', href: '/profile/personal-info' },
      { text: 'Payment methods', href: '/profile/payments' },
      // { text: "Addresses", href: "/profile/addresses" },
      // { text: "Order history", href: "/profile/order-history" },
   ];

   return (
      <header>
         <nav className={`nav min-w-96 m-auto mt-12 max-w-6xl`}>
            <div className='navbar rounded-box'>
               <div className='nav__menu-list border-b-2 border-solid border-gray-300 px-3'>
                  <div className='tabs -mb-0.5'>
                     {MENU_LIST.map((menu) => (
                        <NavItem key={menu.text} {...menu} router={router} />
                     ))}
                  </div>
               </div>
               <div className='flex flex-1 justify-end px-2'>
                  <div className='flex items-stretch'>
                     <div className='dropdown-end dropdown'>
                        <label
                           tabIndex={0}
                           className='btn-ghost rounded-btn btn'
                        >
                           user
                        </label>
                        <ul
                           tabIndex={0}
                           className='dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow'
                        >
                           <li>
                              <a>username</a>
                           </li>
                           <li>
                              <a>log out </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
