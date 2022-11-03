import React from 'react';
import FullButton from '../FullButton';
import GoogleSvgIcon from '../../svg/GoogleSvgIcon';
import AuthIconWrapper from '../../../../components/features/auth/AuthIconWrapper';

const GoogleButton: React.FC<{
   onClick?: React.MouseEventHandler;
}> = ({ onClick }) => {
   return (
      <FullButton onClick={onClick} className='btn-secondary'>
         <AuthIconWrapper>
            <GoogleSvgIcon />
         </AuthIconWrapper>
         Google
      </FullButton>
   );
};

export default GoogleButton;
