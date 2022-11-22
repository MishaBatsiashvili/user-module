import React from 'react';
import { ErrorMessage } from 'formik';

/*
input
+ label
+ error
+ type - (text, email, password)
*/

interface ITextInput {
   onChange: () => void
   onBlur: () => void
   name: string
   value: string
   type: 'text' | 'email' | 'password' | 'number'
   placeholder: string
   label: string
}

const TextInput: React.FC<ITextInput> = ({
   onChange,
   onBlur,
   name,
   value,
   type = 'text',
   // extra
   placeholder = '',
   label = '',
}) => {

   const renderError = () => {
      return (
         <ErrorMessage name={name}>
            {(msg) => (
               <div className='label pt-0'>
                  <span className='label-text font-semibold text-error'>
                     {msg}
                  </span>
               </div>
            )}
         </ErrorMessage>
      );
   };

   const renderLabel = () => {
      if (!label) {
         return null;
      }

      return (
         <label htmlFor={name} className='label'>
            <span className='label-text'>{label}</span>
         </label>
      );
   };

   return (
      <>
         {renderLabel()}
         {renderError()}
         <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className={`input-bordered input my-1 w-full mb-3`}
         />
      </>
   );
};

export default TextInput;
