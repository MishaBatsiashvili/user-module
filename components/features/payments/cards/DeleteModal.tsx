import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import type { ModalPropsType } from './ModalTypes';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedContentWrp, AnimatedOverlayWrp } from './modalHelpers';

const DeleteModal: React.FC<ModalPropsType> = ({
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
         }, 1000);
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
                        Do you want to delete
                        <span className='font-bold'>
                           &quot;{cardName}&quot;
                        </span>
                        ?
                     </Dialog.Title>
                     <h6 className='mt-2 text-sm'>Card Number: {cardMask}</h6>
                     <div className='mt-8 flex items-end'>
                        <button
                           className={`btn-primary btn mr-2 min-w-[100px] ${
                              primaryBtnLoading ? 'loading' : ''
                           }`}
                           onClick={onPrimaryBtnClicked}
                        >
                           Yes
                        </button>
                        <button
                           className='btn-secondary btn min-w-[100px]'
                           onClick={() => setShowModal(false)}
                        >
                           Close
                        </button>
                     </div>
                  </Dialog.Content>
               </AnimatedContentWrp>
            </Dialog.Portal>
         </Dialog.Root>
      );
   };

   return <AnimatePresence>{renderModalJSX()}</AnimatePresence>;
};

export default DeleteModal;
