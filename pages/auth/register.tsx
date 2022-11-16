import Link from 'next/link';
import React from 'react';
import AuthFormWrapper from "../../components/features/auth/AuthFormWrapper";
export interface IAppProps { }

export function register() {
   const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();
      // Do something
      console.log('submited');
   };

   return (
      <div className='auth-form'>
         <AuthFormWrapper>

            <div>
               <div className='pb-5 text-center text-4xl'>რეგისტრაცია</div>
            </div>

            <form onSubmit={submitForm}>
               <input
                  type='Name'
                  placeholder='Name'
                  className='input-bordered input my-1 w-full'
               />
               <input
                  type='Email'
                  placeholder='Email'
                  className='input-bordered input my-1 w-full'
               />
               <input
                  type='number'
                  placeholder='Phone number'
                  className='input-bordered input my-1 w-full'
               />
               <input
                  type='Password'
                  placeholder='Password'
                  className='input-bordered input my-1 w-full'
               />
               <input
                  type='Password'
                  placeholder='Confirm Password'
                  className='input-bordered input my-1 w-full'
               />
               <button className='btn-primary btn w-full'>რეგისტრაცია</button>
            </form>

            <div className='relative my-8'>
               <div className='h-0.5 bg-black'></div>
               <div className='hr-line'>
                  {' '}
                  <div className='my-2 text-center'>
                     რეგისტრირებული ხარ ?{' '}
                     <Link href='/auth/login'>
                        <a href='#' className='link-primary link font-semibold'>
                           ავტორიზაცია{' '}
                        </a>
                     </Link>
                  </div>{' '}
               </div>
            </div>
         </AuthFormWrapper>
      </div>
   );
}
export default register;
