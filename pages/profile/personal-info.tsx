/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/layout/Layout';
import type { NextPageWithLayout } from '../_app';
import Head from 'next/head';
import ContentContainer from '../../components/layout/ContentContainer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AnimatedMainContentWrp } from '../../components/layout/AnimatedMainContentWrp';

export async function getServerSideProps({ locale }) {
   return {
      props: {
         ...(await serverSideTranslations(locale)),
      },
   };
}

const Personal: NextPageWithLayout = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Kovzy Dev | Personal Info</title>
         </Head>
         <AnimatedMainContentWrp>
            <ContentContainer>
               <div className='flex flex-row'>
                  <div className='flex min-w-[96px] flex-col items-center'>
                     <label className='group cursor-pointer'>
                        <img
                           className='h-20 w-20 rounded-full border-4 border-inherit sm:h-24 sm:w-24 '
                           src={
                              'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.webp'
                           }
                           alt=''
                           width='384'
                           height='512'
                        />
                        <input type='file' name='image' className='hidden' />
                        <div className='link-primary mt-2 text-center text-base font-semibold group-hover:opacity-50'>
                           Edit
                        </div>
                     </label>
                  </div>

                  <div className='ml-10 md:ml-12 '>
                     <div className='flex flex-row items-center justify-between text-2xl font-bold md:text-3xl'>
                        John Doe
                     </div>
                     <div className='mt-6 columns-1 sm:columns-2'>
                        <div className='mr-6 flex flex-col text-base md:mr-12'>
                           <div className='mb-1 font-bold'>Email</div>
                           <div>lalaasdasd@lala.com</div>
                        </div>

                        <div className='mt-4 flex flex-col sm:mt-0'>
                           <div className='mb-1 font-bold'>Phone number</div>
                           <div>555222111</div>
                        </div>
                     </div>
                  </div>
               </div>
            </ContentContainer>
         </AnimatedMainContentWrp>
      </React.Fragment>
   );
};
export default Personal;

Personal.getLayout = function getLayout(page: any) {
   return <Layout key='personal-info'>{page}</Layout>;
};
