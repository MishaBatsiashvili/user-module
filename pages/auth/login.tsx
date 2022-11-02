import React from 'react';
import Image from 'next/image';
import bog from '../../public/assets/bog.png';
import fb from '../../public/assets/fb.png';
import google from '../../public/assets/google.png';
import Link from 'next/link';

export function login() {

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
                    <div className='text-4xl text-center pb-5'>Log in</div>
                </div>

                <form onSubmit={submitForm}>
                    <input type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input type="Password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary btn-wide">Log In</button>
                </form>

                <div className="text-center my-2"><a className="link link-primary mt-5">Forgot Your Password?</a></div>
                <div className="relative my-8">
                    <div className="bg-black h-0.5">
                    </div>
                    <div className="hr-line">  or continue with  </div>
                </div>

                <div>
                    <button className="btn btn-outline hover:text-white text-google hover:bg-google">
                        <div className='auth-image-div'>
                            <Image
                                src={google}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />
                        </div>
                        google
                    </button>

                    <button className="btn btn-outline hover:text-white text-fb hover:bg-fb">
                        <div className='auth-image-div'>
                            <Image
                                src={fb}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />
                        </div>
                        fb
                    </button>

                    <button className="btn btn-outline group hover:text-white text-bog hover:bg-bog">
                        <div className='auth-image-div'>
                            {/* image ზე ჰოვერი მუშაობს როცა სურათთან მიგვაქვს მაუსი */}
                            <Image
                                className='group-hover:bg-white group-hover:rounded'
                                src={bog}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />
                        </div>
                        bog
                    </button>
                </div>

                <div className="relative my-8">
                    <div className="bg-black h-0.5">
                    </div>
                    <div className="hr-line">  <div className="text-center my-2">New user? <Link href="/auth/register"><a className="link link-primary">Register now </a></Link></div> </div>
                </div>
            </div>
        </div>
    );
}
export default login;