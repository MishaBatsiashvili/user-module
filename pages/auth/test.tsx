import React from 'react';
import { Formik, Form, Field, FormikErrors } from 'formik';
import TextInput from '../../components/common/form/TextInput';
import AuthFormWrapper from '../../components/features/auth/AuthFormWrapper';
import FullButton from '../../components/common/buttons/FullButton';

type FormInputsNames = {
   email: string;
   password: string;
};

function test() {
   return (
      <div className='app'>
         <AuthFormWrapper>
            <Formik
               initialValues={{ email: '123', password: '' }}
               validate={(values) => {
                  const errors: FormikErrors<FormInputsNames> = {};
                  if (!values.email) {
                     errors.email = 'Required';
                  } else if (
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                     )
                  ) {
                     errors.email = 'Invalid email address';
                  }
                  return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                  }, 400);
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <Field type='text' as={TextInput} label="Email" name='email' />
                     <FullButton disabled={isSubmitting}>Submit</FullButton>
                  </Form>
               )}
            </Formik>
         </AuthFormWrapper>
      </div>
   );
}

export default test;
