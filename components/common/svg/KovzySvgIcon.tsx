import React from 'react';
import Image from 'next/image';
import Kovzy from './kovzy.png';

export default function KovzySvgIcon({ width = 50, height = 110 }) {
   return (
      <Image
         height={width}
         width={height}
         src={Kovzy}
         alt='kovzy Logo'
      />
   );
}
