//import Link from 'next/link';
import React from 'react';
import Container from '../layout/Container';
import NavbarBottom from './NavbarBottom';
import NavbarTop from './NavbarTop';

const Navbar: React.FC = () => {
   return (
      <header>
         <Container>
            <nav className='w-full'>
               <NavbarTop />
               <NavbarBottom />
            </nav>
         </Container>
      </header>
   );
};

export default Navbar;
