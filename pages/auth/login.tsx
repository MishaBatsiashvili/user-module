import React from 'react';
import Image from 'next/image';
import bog from '../../public/assests/bog.png';
import fb from '../../public/assests/fb.png';
import google from '../../public/assests/google.png';
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
                <div className='auth-header-text'>lalaa</div>
                <form onSubmit={submitForm}>
                    <input type="Email" placeholder="Email" className="input input-ghost w-full max-w-xs" />
                    <input type="Password" placeholder="Password" className="input input-bordered w-full max-w-xs " />
                    <button className="btn btn-primary btn-wide">Submit</button>
                </form>
                {/* არ მუშაობს კარგად მობილურ ვერსიაზე */}
                <h2 className='hr-lines'> <div className='bg-[#FFF3F3] ml-44 mr-44 whitespace-pre inline' >or continue with </div></h2>
                {/* არ მუშაობს კარგად მობილურ ვერსიაზე */}
                <button className="btn btn-outline hover:text-[#000000] text-[#F4B400] hover:bg-[#0F9D58]">
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

                <button className="btn btn-outline hover:text-[#ffff] text-fb hover:bg-fb">
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

                <button className="btn btn-outline group hover:text-[#ffff] text-bog hover:bg-bog">
                    <div className='auth-image-div'>
                        {/* image ზე ჰოვერი მუშაობს როცა სურათთან მიგვაქვს მაუსი */}
                        <Image
                            className='group-hover:bg-[#ffff] group-hover:rounded'
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

    );
}
export default login;