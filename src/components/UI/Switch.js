import React, { useState } from 'react';
import { Switch as _Switch } from '@headlessui/react';

export default function Switch({ wrapperClassName }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={wrapperClassName || 'py-2'}>
      <_Switch
        checked={enabled}
        onChange={(val) => {
          setEnabled(val);
        }}
        className={`${enabled ? 'bg-primaryDark' : 'bg-darkGray'}
          relative inline-flex flex-shrink-0 h-4 w-12  
          border-2 border-transparent rounded-full cursor-pointer
           transition-colors ease-in-out duration-200 focus:outline-none 
           focus-visible:ring-2 focus-visible:ring-white 
           focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-7 bg-primary' : '-translate-x-1 bg-gray'}
            pointer-events-none inline-block h-5 w-5 -mt-1
            rounded-full shadow-lg transform ring-0 transition ease-in-out
             duration-200`}
        />
      </_Switch>
    </div>
  );
}
