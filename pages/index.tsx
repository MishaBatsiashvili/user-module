import Link from 'next/link';
import Layout from '../components/layout/Layout';
import type { NextPageWithLayout } from './_app';
import Box from '../components/layout/Box';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import ContentContainer from '../components/layout/ContentContainer';

// <Icon icon={faAddressBook}/>
export async function getServerSideProps({ locale }) {
   return {
      props: {
         ...(await serverSideTranslations(locale)),
      },
   };
}

const Home: NextPageWithLayout = (props) => {
   const { t } = useTranslation(['common', 'errors']);

   return (
      <>
         <Head>
            <title>Kovzy Dev | Index</title>
         </Head>
         <ContentContainer className='flex-grow'>
            <Box className='h-full'>
               <h3>{t('desc')}</h3>
               <h3>{t('errors:invalidEmail')}</h3>
               <Link href='/auth/login'>
                  <button className='btn mr-2'>login</button>
               </Link>
               <Link href='/auth/register'>
                  <button className='btn ml-2'>register</button>
               </Link>
               <Link href='/profile/'>
                  <button className='btn ml-2'>profile</button>
               </Link>
            </Box>
         </ContentContainer>
      </>
   );
};

export default Home;

Home.getLayout = function getLayout(page: any) {
   return <Layout>{page}</Layout>;
};
