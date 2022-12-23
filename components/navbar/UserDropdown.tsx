import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export const UserDropdown: React.FC = () => {
   const router = useRouter();

   return (
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
                        <input
                           id='checlbox'
                           type='checkbox'
                           className='min-h-0'
                        />
                        <div className='collapse-title z-10 block min-h-0 p-0'>
                           <label
                              htmlFor='checlbox'
                              className='btn-secondary btn w-full'
                           >
                              Languages
                           </label>
                        </div>
                        <ul className='collapse-content mt-1 px-0'>
                           <li>
                              <Link href={router.pathname} locale={false}>
                                 ქართული 1
                              </Link>
                           </li>
                           <li>
                              <Link href={router.pathname} locale={'en'}>
                                 English 1
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <button className='btn-error btn text-base-100'>
                        Log Out
                     </button>
                  </div>
               </div>
            </div>
         </div>
   );
};

export default UserDropdown;
