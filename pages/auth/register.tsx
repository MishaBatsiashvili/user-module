import Link from 'next/link';
import React from 'react';
export interface IAppProps {
}

export function register() {

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();
      // Do something
      console.log('submited');
  };

  return (
      <div className="app">
          <div className="auth-form" >
              <div>
                  <div className='text-4xl text-center pb-5'>Sign up</div>
              </div>

              <form onSubmit={submitForm}>
                  <input type="Name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                  <input type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                  <input type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                  <input type="Password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                  <input type="Password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
                  <button className="btn btn-primary btn-wide">SIGN UP</button>
              </form>
      
              <div className="relative my-8">
                  <div className="bg-black h-0.5">
                  </div>
                  <div className="hr-line">  <div className="text-center my-2">Already a user? <Link href="/auth/login"><a className="link link-primary">Login</a></Link></div> </div>
              </div>
          </div>
      </div>
  );
}
export default register;