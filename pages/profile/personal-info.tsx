import Layout from '../../components/layout/Layout';
import type { NextPageWithLayout } from '../_app';

const Personal: NextPageWithLayout = () => {
   return (
      <>
         <div className='profile-form'>
            <div className='flex flex-row'>
               <div className='flex flex-col items-center'>
                  {/* This is temporary - should be turned into next/image component */}
                  <img
                     className='h-24 w-24 rounded-full '
                     src={
                        'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.webp'
                     }
                     alt=''
                     width='384'
                     height='512'
                  />
                  {/* /. */}
                  <div className='text-lg font-bold'>Mr Capybara</div>
               </div>

               <div className='ml-12 flex flex-col font-bold'>
                  <div className='flex flex-row items-center justify-between text-lg'>
                     Capybara
                  </div>
                  <div className='mt-5 flex flex-row'>
                     <div className='mr-12 flex flex-col'>
                        <div>mail</div>
                        <div>lala@lala.com</div>
                     </div>

                     <div className='flex flex-col'>
                        <div>number</div>
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
