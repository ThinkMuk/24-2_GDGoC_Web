import React from 'react';
import gdgocIcon from '@public/src/images/GDGoC_icon.png';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex flex-row select-none pt-[53px] px-[96px] mobile:justify-center mobile:px-[0px]'>
      <div className='flex flex-row gap-x-[16px] w-fit cursor-pointer'>
        <Image className='' src={gdgocIcon} alt='gdgocIcon' width={54} height={26} />
        <div className='text-white text-[16px] pt-[3px]'>
          <strong>GDGoC</strong> Inha univ.
        </div>
      </div>
    </div>
  );
}
