import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavItem from './NavItem';

const NavbarBottom: React.FC = () => {
   const router = useRouter();
   const { t, i18n } = useTranslation('common');

   const MENU_LIST = [
      { text: 'Personal info', href: '/profile/personal-info' },
      { text: 'Payment methods', href: '/profile/payments' },
   ];

   return (
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
   );
};

export default NavbarBottom;
