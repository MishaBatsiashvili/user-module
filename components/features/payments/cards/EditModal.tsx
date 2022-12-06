import * as Dialog from '@radix-ui/react-dialog';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import TextInput from '../../../common/form/TextInput';
import * as yup from 'yup';
import Button from '../../../common/buttons/Button';
import type { ModalPropsType } from './ModalTypes';
import { AnimatedContentWrp, AnimatedOverlayWrp } from './modalHelpers';
import { AnimatePresence } from 'framer-motion';

const EditModal: React.FC<ModalPropsType> = ({
   showModal,
   setShowModal,
   cardId,
   cardName,
   cardMask,
}) => {
   const [primaryBtnLoading, setPrimaryBtnLoading] = useState(false);
   const onPrimaryBtnClicked = async () => {
      setPrimaryBtnLoading(true);
      await new Promise((r) => {
         setTimeout(() => {
            r(true);
         }, 2000);
      });
      setPrimaryBtnLoading(false);
      setShowModal(false);
   };

   
   const renderModalJSX = () => {
      if (!showModal) {
         return null;
      }

      return (
         <Dialog.Root open={true}>
            <Dialog.Portal>
               <AnimatedOverlayWrp>
                  <Dialog.Overlay
                     onClick={() => setShowModal(false)}
                     className='block h-full w-full bg-black opacity-50'
                  />
               </AnimatedOverlayWrp>
               <AnimatedContentWrp>
                  <Dialog.Content className='absolute top-1/2 left-1/2 box-border block w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-10'>
                     <Dialog.Title className='text-xl'>
                        Edit{' '}
                        <span className='font-bold'>
                           &quot;{cardName}&quot;
                        </span>
                        ?
                     </Dialog.Title>
                     <h6 className='mt-2 text-sm'>Card Number: {cardMask}</h6>
                     <div className='mt-4 flex items-end'>
                        <Formik
                           initialValues={{
                              name: cardName,
                           }}
                           validationSchema={() =>
                              yup.object().shape({
                                 name: yup.string().required(),
                              })
                           }
                           onSubmit={async (values, { setSubmitting }) => {
                              setSubmitting(true);
                              onPrimaryBtnClicked();
                           }}
                        >
                           {({ isSubmitting }) => (
                              <Form className='w-full'>
                                 <Field
                                    type='text'
                                    as={TextInput}
                                    name='name'
                                 />

                                 <div className='flex items-center'>
                                    <Button
                                       className={`btn-primary mr-2 min-w-[100px] ${
                                          primaryBtnLoading ? 'loading' : ''
                                       }`}
                                    >
                                       Save
                                    </Button>
                                    <Button
                                       className='btn-secondary min-w-[100px]'
                                       onClick={() => setShowModal(false)}
                                    >
                                       Close
                                    </Button>
                                 </div>
                              </Form>
                           )}
                        </Formik>
                     </div>
                  </Dialog.Content>
               </AnimatedContentWrp>
            </Dialog.Portal>
         </Dialog.Root>
      );
   };

   return <AnimatePresence>{renderModalJSX()}</AnimatePresence>;
};

export default EditModal;
