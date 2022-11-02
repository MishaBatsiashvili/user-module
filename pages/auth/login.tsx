import React from 'react';
import Image from 'next/image';
import google from '../../public/assets/google.png';
import Link from 'next/link';
import FacebookSvgIcon from '../../components/common/svg/FacebookSvgIcon';
import BogSvgIcon from '../../components/common/svg/BogSvgIcon';
import TextHr from '../../components/common/TextHr';

export function login() {
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
               <div className='pb-5 text-center text-4xl'>Log in</div>
            </div>

            <form onSubmit={submitForm}>
               <input
                  type='Email'
                  placeholder='Email'
                  className='input-bordered input w-full max-w-xs'
               />
               <input
                  type='Password'
                  placeholder='Password'
                  className='input-bordered input w-full max-w-xs'
               />
               <button className='btn-primary btn-wide btn'>Log In</button>
            </form>

            <div className='my-2 text-center'>
               <a href='#' className='link-primary mt-5'>Forgot Your Password?</a>
            </div>
            <div className='relative my-8'>
               <TextHr>or continue with</TextHr>
            </div>

            <div>
               <button className='btn-secondary btn'>
                  <div className='auth-image-div'>
                     <Image
                        src={google}
                        alt='Picture of the author'
                        width={30}
                        height={30}
                     />
                  </div>
                  Google
               </button>

               <button className='btn bg-fb text-white hover:bg-fb-hover hover:text-white'>
                  <div className='auth-image-div'>
                     <FacebookSvgIcon />
                  </div>
                  Facebook
               </button>

               <button className='group btn  bg-bog text-white hover:bg-bog-hover hover:text-white'>
                  <div className='auth-image-div'>
                     <BogSvgIcon />
                  </div>
                  Bank of Georgia
               </button>
            </div>

            <div className='relative my-8'>
               <TextHr>
                  <div className='my-2 text-center'>
                     New user?{' '}
                     <Link href='/auth/register'>
                        <a href='#' className='link-primary'>Register now </a>
                     </Link>
                  </div>
               </TextHr>
            </div>
         </div>
      </div>
   );
}
export default login;
