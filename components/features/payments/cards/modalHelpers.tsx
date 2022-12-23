import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedContentWrp: React.FC<{
   children?: React.ReactNode;
}> = ({ children = null }) => {
   return (
      <motion.div
         className='absolute left-0 top-0 z-10 h-full w-full'
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.3, type: 'linear' }}
      >
         {children}
      </motion.div>
   );
};

export const AnimatedOverlayWrp: React.FC<{
   children?: React.ReactNode;
}> = ({ children = null }) => {
   return (
      <motion.div
         className='fixed top-0 left-0 z-10 h-full w-full'
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0, transition: { delay: 0.1 } }}
         transition={{ duration: 0.3, type: 'linear' }}
      >
         {children}
      </motion.div>
   );
};