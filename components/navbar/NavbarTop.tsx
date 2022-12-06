import Link from 'next/link';
import React from 'react';
import KovzySvgIcon from '../common/svg/KovzySvgIcon';
import UserDropdown from './UserDropdown';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const NavbarTop: React.FC = () => {
   return (
      <div className='flex flex-1 justify-center px-2 pb-2 '>
         {/* <Icon icon={} /> */}
         <div className='absolute pt-1'>
            <Link href={'/'}>
               <div>
                  <KovzySvgIcon />
               </div>
            </Link>
         </div>
         <UserDropdown />
      </div>
   );
};

export default NavbarTop;
