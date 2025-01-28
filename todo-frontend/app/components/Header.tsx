'use client';
import React from 'react';
import Container from './Container';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="relative h-[200px] w-full bg-[#0D0D0D] z-10">
      <Container>
        <div className="flex items-start justify-center h-full">
          <div className="flex items-start justify-center h-full">
            <div className="relative top-[72px] sm:top-[60px] md:top-[72px] lg:top-[80px]">
              <Logo />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
