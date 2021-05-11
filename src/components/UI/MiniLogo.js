import React from 'react';
import logoMini from '../../assets/icons/logoMini.svg';

function MiniLogo({ size }) {
  return (
    <div className={`bg-blue rounded-full relative ${size === 'sm' ? 'w-9 h-9' : 'w-12 h-12'} `}>
      <img
        className={
          size === 'sm'
            ? 'w-6 h-6 absolute top-1 left-1.5'
            : size === 'md'
            ? 'w-8 h-8 absolute top-1 left-1.5'
            : 'w-10 h-10'
        }
        src={logoMini}
        alt="logoMini"
      />
    </div>
  );
}

export default MiniLogo;
