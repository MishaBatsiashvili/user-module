/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/layout/Layout';
import type { NextPageWithLayout } from '../_app';

const Personal: NextPageWithLayout = () => {
   return (
      <>
         <div className='container mx-auto max-w-5xl px-2 mt-10 sm:pl-5'>
            <div className='flex flex-row'>
               <div className='flex flex-col items-center min-w-[96px]'>
                  {/* This is temporary - should be turned into next/image component */}
                  <img
                     className='h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-inherit '
                     src={
                        'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.webp'
                     }
                     alt=''
                     width='384'
                     height='512'
                  />
                  {/* /. */}
                  <label className='link-primary link font-semibold'>Edit</label>
               </div>

               <div className='ml-10 md:ml-12 '>
                  <div className='flex flex-row items-center justify-between font-bold text-2xl md:text-3xl'>
                     Mr Capybara
                  </div>
                  <div className='mt-5 columns-1 sm:columns-2'>
                     <div className='mr-6 md:mr-12 flex flex-col'>
                        <div className="font-bold">Email</div>
                        <div>lalaasdasd@lala.com</div>
                     </div>

                     <div className='flex flex-col mt-4 sm:mt-0'>
                        <div className="font-bold ">Phone number</div>
                        <div>555222111</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Personal;

Personal.getLayout = function getLayout(page: any) {
   return <Layout>{page}</Layout>;
};
