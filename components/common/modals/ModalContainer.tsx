import React from 'react';
import { createPortal } from 'react-dom';

const ModalContainer: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   if (typeof window == 'undefined') {
      return <></>;
   }

   const domNode = document.querySelector('#modal');
   if (!domNode) {
      return <></>;
   }

   return createPortal(children, domNode);
};

export default ModalContainer;
