'use client';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-[226px] h-[48px]">
      <Image
        src={'/logo.svg'}
        alt="Logo"
        width={226}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
