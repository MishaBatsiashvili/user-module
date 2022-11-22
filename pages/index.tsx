import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import type { NextPageWithLayout } from './_app';
import AuthFormWrapper from '../components/features/auth/AuthFormWrapper';
import Container from '../components/layout/Container';
import Box from '../components/layout/Box';

// <Icon icon={faAddressBook}/>

const Home: NextPageWithLayout = () => {
   return (
      <Container className='flex-grow'>
         <Box className='h-full'>
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
      </Container>
   );
};

export default Home;

Home.getLayout = function getLayout(page: any) {
   return <Layout>{page}</Layout>;
};
