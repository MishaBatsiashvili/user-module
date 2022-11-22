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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
   return {
      props: {
         ...(await serverSideTranslations(locale)),
      },
   };
}

export function Login() {
   const initialValues = {
      email: '',
      password: '',
   };

   const FormValidationSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
   });

   const submitForm = (values: typeof initialValues) => {
      console.log(values, 'submited');
   };

   return (
      <AuthFormWrapper>
         <div>
            <div className='pb-8 text-center text-2xl font-bold leading-relaxed'>
               შედით ანგარიშში
            </div>
         </div>

         <Formik
            initialValues={initialValues}
            validationSchema={FormValidationSchema}
            onSubmit={async (values, { setSubmitting }) => {
               setSubmitting(true);
               await new Promise((resolve) => {
                  setTimeout(() => {
                     submitForm(values)
                     resolve(1);
                  }, 2000);
               });
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
   );
}
export default Login;
