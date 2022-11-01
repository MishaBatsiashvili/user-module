import React from 'react';
import Image from 'next/image';
import bog from '../../public/assests/bog.png';
import fb from '../../public/assests/fb.png';
import google from '../../public/assests/google.png';
import Link from 'next/link';
export interface IAppProps {
}

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
                <div className='auth-header-text'>Log in</div>
                <div className='pb-3 ml-1'>New user? <Link href="/auth/register"><a className="link link-primary">Register now </a></Link></div>
                <form onSubmit={submitForm}>
                    <input type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input type="Password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary btn-wide">Submit</button>
                </form>
                <div><a className="link link-primary mt-5 ml-6">Forget Your Password?</a></div>
                {/* არ მუშაობს კარგად მობილურ ვერსიაზე */}
                <h2 className='hr-lines'>  or continue with  </h2>
                {/* არ მუშაობს კარგად მობილურ ვერსიაზე */}
                <div>
                    <button className="btn btn-outline hover:text-black text-[#F4B400] hover:bg-[#0F9D58]">
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
            </div>
        </div>

    );
}
export default login;