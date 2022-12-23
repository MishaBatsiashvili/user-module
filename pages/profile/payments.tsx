import React from 'react';
import Head from 'next/head';
import ContentContainer from '../../components/layout/ContentContainer';
import Layout from '../../components/layout/Layout';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import TextInput from '../../components/common/form/TextInput';
import { Formik } from 'formik';
import DeleteModal from '../../components/features/payments/cards/DeleteModal';
import EditModal from '../../components/features/payments/cards/EditModal';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { AnimatedMainContentWrp } from '../../components/layout/AnimatedMainContentWrp';

export type CardItemProps = {
   cardId: number;
   cardName: string;
   cardMask: string;
   // cardType: 'mastercard' | 'visa';
};

const CardItem: React.FC<CardItemProps> = ({ cardId, cardName, cardMask }) => {
   const [showEditModal, setShowEditModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [modalPrimaryBtnLoading, setModalPrimaryBtnLoading] = useState(false);

   const onPrimaryBtnClicked = async () => {
      // set loading state - true
      setModalPrimaryBtnLoading(true);

      // make request
      await new Promise((r) => {
         setTimeout(() => {
            r(1);
         }, 1000);
      });

      // set loading state - false
      setModalPrimaryBtnLoading(false);
      // hide modal
      setShowModal(false);
   };

   const renderDeleteModal = () => {
      return (
         <Dialog.Root defaultOpen={true} open={showModal}>
            <Dialog.Portal>
               <Dialog.Overlay
                  onClick={() => setShowModal(false)}
                  className='fixed top-0 left-0 z-10 block h-full w-full animate-fadeInHalf bg-black opacity-50'
               />
               <Dialog.Content className='fixed top-1/2 left-1/2 z-10 box-border block w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 animate-fadeIn animate-fadeIn rounded-lg bg-white p-10'>
                  <Dialog.Title>
                     Do you want to delete &quot;{cardName}&quot;?
                  </Dialog.Title>
                  <div className='mt-6 flex items-end'>
                     <button
                        className={`btn-primary btn mr-2 min-w-[100px] ${
                           modalPrimaryBtnLoading ? 'loading' : ''
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
            </Dialog.Portal>
         </Dialog.Root>
      );
   };

   return (
      <div className='flex flex-1 justify-between pb-5'>
         <div className='flex items-center'>
            <Icon icon={faCreditCard} className='mr-3 text-xl' />
            <div className='font-bold'>{cardName}</div>
            <div className='mx-2 font-bold'>|</div>
            <div className=''>{cardMask}</div>
         </div>
         <div className='flex'>
            <div
               className='btn-secondary btn-sm btn mr-3'
               onClick={() => setShowEditModal(true)}
            >
               Edit
            </div>
            <div
               className='btn-error btn-sm btn'
               onClick={() => setShowDeleteModal(true)}
            >
               Delete
            </div>
            <DeleteModal
               showModal={showDeleteModal}
               setShowModal={setShowDeleteModal}
               cardId={cardId}
               cardName={cardName}
               cardMask={cardMask}
            />
            <EditModal
               showModal={showEditModal}
               setShowModal={setShowEditModal}
               cardId={cardId}
               cardName={cardName}
               cardMask={cardMask}
            />
            {/* {renderDeleteModal()} */}
         </div>
      </div>
   );
};

export async function getServerSideProps({ locale }: { locale: string }) {
   return {
      props: {
         ...(await serverSideTranslations(locale)),
      },
   };
}

const Payments: React.FC<{
   items: CardItemProps[];
}> = () => {
   return (
      <>
         <Head>
            <title>Kovzy Dev | Payment Methods</title>
         </Head>
         <AnimatedMainContentWrp>
            <ContentContainer>
               {/* <div className="text-center text-lg font-bold pb-5">
            Card list
         </div> */}
               {/*  */}
               <CardItem
                  cardId={1}
                  cardName='Main Card'
                  cardMask='1234 56** **** 1234'
                  cardType='mastercard'
               />
               {/*  */}
               <hr className='my-5' />
               <div className='flex flex-1 justify-center pt-5'>
                  <button className='btn-primary btn-wide btn '>
                     Add card
                  </button>
               </div>
            </ContentContainer>
         </AnimatedMainContentWrp>
      </>
   );
};
export default Payments;

Payments.getLayout = function getLayout(page: any) {
   return <Layout key='payments'>{page}</Layout>;
};
