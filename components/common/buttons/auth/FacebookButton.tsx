import React from 'react';
import FullButton from '../FullButton';
import FacebookSvgIcon from '../../svg/FacebookSvgIcon';
import AuthIconWrapper from '../../../../components/features/auth/AuthIconWrapper';

const FacebookButton: React.FC<{
   onClick?: React.MouseEventHandler;
}> = ({ onClick }) => {
   return (
      <FullButton
         onClick={onClick}
         className='bg-fb text-white hover:bg-fb-hover hover:text-white'
      >
         <AuthIconWrapper>
            <FacebookSvgIcon />
         </AuthIconWrapper>
         Facebook
      </FullButton>
   );
};

export default FacebookButton;
