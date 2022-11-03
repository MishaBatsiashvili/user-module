import React from 'react';
import Image from 'next/image';
import bogSVG from '../../../public/assets/svg/bog.svg';

export default function BogSvgIcon({ width = 30, height = 30 }) {
   return (
      <Image
         width={width}
         height={height}
         src={bogSVG}
         alt='Bank of Georgia Logo'
      />
   );
}
