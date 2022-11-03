import Link from 'next/link';
import React from 'react';
export interface IAppProps {}

export function register() {
   const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();
      // Do something
      console.log('submited');
   };

   return (
      <div className='app'>
         <div className='auth-form'>
            <div>
               <div className='pb-5 text-center text-4xl'>Sign up</div>
            </div>

            <form onSubmit={submitForm}>
               <input
                  type='Name'
                  placeholder='Name'
                  className='input-bordered input w-full max-w-xs'
               />
               <input
                  type='Email'
                  placeholder='Email'
                  className='input-bordered input w-full max-w-xs'
               />
               <input
                  type='number'
                  placeholder='Phone number'
                  className='input-bordered input w-full max-w-xs'
               />
               <input
                  type='Password'
                  placeholder='Password'
                  className='input-bordered input w-full max-w-xs'
               />
               <input
                  type='Password'
                  placeholder='Confirm Password'
                  className='input-bordered input w-full max-w-xs'
               />
               <button className='btn-primary btn-wide btn'>SIGN UP</button>
            </form>

            <div className='relative my-8'>
               <div className='h-0.5 bg-black'></div>
               <div className='hr-line'>
                  {' '}
                  <div className='my-2 text-center'>
                     Already a user?{' '}
                     <Link href='/auth/login'>
                        <a className='link-primary link'>Login</a>
                     </Link>
                  </div>{' '}
               </div>
            </div>
         </div>
      </div>
   );
}
export default register;
