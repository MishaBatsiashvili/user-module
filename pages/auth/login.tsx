import React from 'react';
import Link from 'next/link';
import TextHr from '../../components/common/TextHr';
import AuthFormWrapper from '../../components/features/auth/AuthFormWrapper';
import GoogleButton from '../../components/common/buttons/auth/GoogleButton';
import FacebookButton from '../../components/common/buttons/auth/FacebookButton';
import BogButton from '../../components/common/buttons/auth/BogButton';
import { Field, Form, Formik } from 'formik';
import FullButton from '../../components/common/buttons/FullButton';
import TextInput from '../../components/common/form/TextInput';
import * as yup from 'yup';


export function login() {
   const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();
      // Do something
      console.log('submited');
   };

   const initialValues = {
      email: '',
      password: '',
   };

   const FormValidationSchema = yup.object().shape({
      email: yup.string().email().required('Required'),
      password: yup.string().required('Required'),
   });

   return (
      <div className='auth-form'>
         <AuthFormWrapper>
            <div>
               <div className='pb-8 text-center text-2xl font-bold leading-relaxed'>
                  შედით ანგარიშში
               </div>
            </div>

            <Formik
               initialValues={initialValues}
               validationSchema={FormValidationSchema}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                  }, 400);
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <Field
                        type='text'
                        as={TextInput}
                        label='Email'
                        name='email'
                     />
                     <Field
                        type='password'
                        as={TextInput}
                        label='Password'
                        name='password'
                     />
                     <FullButton disabled={isSubmitting}>Submit</FullButton>
                  </Form>
               )}
            </Formik>

            <div className='my-2 text-center'>
               <a href='#' className='link-primary link mt-5 font-semibold'>
                  პაროლი დაგავიწყდა?
               </a>
            </div>
            <div className='relative my-10'>
               <TextHr>სხვა საშუალებები</TextHr>
            </div>

            <div>
               <GoogleButton
                  onClick={() => {
                     alert('123');
                  }}
               />
               <FacebookButton />
               <BogButton />
            </div>

            <div className='relative my-10'>
               <TextHr>
                  <div className='my-2 text-center'>
                     არ გაქვს ანგარიში?{' '}
                     <Link href='/auth/register'>
                        <a href='#' className='link-primary link font-semibold'>
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
