import React from 'react';
import FullButton from '../FullButton';
import BogSvgIcon from '../../svg/BogSvgIcon';
import AuthIconWrapper from '../../../../components/features/auth/AuthIconWrapper';

const BogButton: React.FC<{
   onClick?: React.MouseEventHandler;
}> = ({ onClick }) => {
   return (
      <FullButton
         onClick={onClick}
         className='bg-bog text-white hover:bg-bog-hover hover:text-white'
      >
         <AuthIconWrapper>
            <BogSvgIcon />
         </AuthIconWrapper>
         Bank of Georgia
      </FullButton>
   );
};

export default BogButton;
