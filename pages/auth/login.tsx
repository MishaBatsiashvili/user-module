import React from 'react';
import Link from 'next/link';
import TextHr from '../../components/common/TextHr';
import AuthFormWrapper from '../../components/features/auth/AuthFormWrapper';
import GoogleButton from '../../components/common/buttons/auth/GoogleButton';
import FacebookButton from '../../components/common/buttons/auth/FacebookButton';
import BogButton from '../../components/common/buttons/auth/BogButton';

export function login() {
   const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();
      // Do something
      console.log('submited');
   };

   return (
      <div className='app'>
         <AuthFormWrapper>
            <div>
               <div className='pb-8 text-center text-2xl font-bold leading-relaxed'>
                  შედით ანგარიშში
               </div>
            </div>

            <form onSubmit={submitForm}>
               <input
                  type='Email'
                  placeholder='Email'
                  className='input-bordered input my-1 w-full'
               />
               <input
                  type='Password'
                  placeholder='Password'
                  className='input-bordered input my-1 w-full'
               />
               <button className='btn-primary btn w-full'>შესვლა</button>
            </form>

            <div className='my-2 text-center'>
               <a href='#' className='link-primary mt-5 font-semibold'>
                  პაროლი დაგავიწყდა?
               </a>
            </div>
            <div className='relative my-10'>
               <TextHr>სხვა საშუალებები</TextHr>
            </div>

            <div>
               <GoogleButton />
               <FacebookButton />
               <BogButton />
            </div>

            <div className='relative my-10'>
               <TextHr>
                  <div className='my-2 text-center'>
                     არ გაქვს ანგარიში?{' '}
                     <Link href='/auth/register'>
                        <a href='#' className='link-primary font-semibold'>
                           დარეგისტრირდი{' '}
                        </a>
                     </Link>
                  </div>
               </TextHr>
            </div>
         </AuthFormWrapper>
      </div>
   );
}
export default login;
