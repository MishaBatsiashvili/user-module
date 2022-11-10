import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

export interface INavbar {
   navActive: boolean;
   // eslint-disable-next-line no-unused-vars
   setNavActive: (value: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ navActive, setNavActive }) => {
   const [activeIdx, setActiveIdx] = useState(-1);
   const router = useRouter();
   const MENU_LIST: { text: string; href: string }[] = [
      { text: "Personal info", href: "/profile/personal-info" },
      { text: "Payment methods", href: "/profile/payments" },
      // { text: "Addresses", href: "/profile/addresses" },
      // { text: "Order history", href: "/profile/order-history" },
   ];

   return (
      <header>
         <nav className={`nav max-w-6xl m-auto mt-12 min-w-96`}>
            <div className="navbar bg-base-300 rounded-box">
               <div className="flex-1 px-2 lg:flex-none">
                  <Link href={'/'} className="text-lg font-bold">Home</Link>
               </div>
               <div
                  onClick={() => setNavActive(!navActive)}
                  className={`nav__menu-bar`}
               ></div>
               <div className={`${navActive ? "active" : ""} nav__menu-list`}>

                  {MENU_LIST.map((menu, idx) => (
                     <label
                        onClick={() => {
                           setActiveIdx(idx);
                           setNavActive(false);
                        }}
                        key={menu.text}
                     >
                        <NavItem active={activeIdx === idx} {...menu} router={router} />
                     </label>
                  ))}
               </div>
               <div className="flex justify-end flex-1 px-2">
                  <div className="flex items-stretch">
                     {/* <a className="btn btn-ghost rounded-btn">Button</a> */}
                     <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">user</label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                           <li><a>username</a></li>
                           <li><a>log out </a></li>
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
