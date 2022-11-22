//import Link from 'next/link';
import React from 'react';
import NavItem from './NavItem';
import { useRouter } from 'next/router';
import { Pagination } from 'swiper';
import UserDropdown from './UserDropdown';

import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../layout/Container';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
   const router = useRouter();
   const { t } = useTranslation('common');


   const MENU_LIST: { text: string; href: string }[] = [
      // { text: 'Home', href: '/' },
      { text: 'Personal info', href: '/profile/personal-info' },
      { text: 'Payment methods', href: '/profile/payments' },
      // { text: "Addresses", href: "/profile/addresses" },
      // { text: "Order history", href: "/profile/order-history" },
   ];

   return (
      <header>
         <Container>
            <nav className='w-full'>
               <UserDropdown />
               <div className='rounded-box pt-5'>
                  <div className='w-full border-b-2 border-solid border-gray-300 px-0'>
                     <div className='-mb-0.5 w-full overflow-auto '>
                        <Swiper
                           breakpoints={{
                              388: {
                                 slidesPerView: 'auto',
                                 spaceBetween: 10,
                              },
                           }}
                           modules={[Pagination]}
                           className='text-center sm:text-left'
                        >
                           {MENU_LIST.map((menu) => (
                              <SwiperSlide key={menu.text} className='!w-auto'>
                                 <NavItem {...menu} router={router} />
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </nav>
         </Container>
      </header>
   );
};

export default Navbar;
