import Link from 'next/link';
import React from 'react';
import KovzySvgIcon from '../common/svg/KovzySvgIcon';

export const UserDropdown: React.FC = () => {
   return (
      <div className='flex flex-1 justify-center px-2 pb-2 '>
         <div className='absolute pt-1'>
            <Link href={'/'}>
               <div>
                  <KovzySvgIcon />
               </div>
            </Link>
         </div>
         <div className='flex flex-1 justify-end '>
            <div className='flex flex-row '>
               <div className='dropdown-end dropdown'>
                  <label tabIndex={0} className='swap swap-rotate btn-circle'>
                     <img
                        className='rounded-full border-4'
                        src={
                           'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.webp'
                        }
                        alt=''
                        width='384'
                        height='512'
                     />
                  </label>

                  <div
                     tabIndex={0}
                     className='dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 drop-shadow-2xl'
                  >
                     <div className='collapse mb-1'>
                        <input id='checlbox' type='checkbox' className='min-h-0' />
                        <div className='min-h-0 block collapse-title p-0 z-10'>
                           <label htmlFor='checlbox' className='btn-secondary btn w-full'>
                              Languages
                           </label>
                        </div>
                        <ul className='collapse-content px-0 mt-1'>
                           <li>
                              <Link href={'ge'} className='hidden'>
                                 ქართული
                              </Link>
                           </li>
                           <li>
                              <Link href={'en'} className='block bg-black'>
                                 English
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <button className='btn-error btn text-base-100'>Log Out</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserDropdown;
