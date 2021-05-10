import React, { useState } from 'react';
import { Switch as _Switch } from '@headlessui/react';

export default function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-2">
      <_Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-fadeBlack' : 'bg-fadeBlack'}
          relative inline-flex flex-shrink-0 h-[26px] w-[50px]  
          border-2 border-transparent rounded-full cursor-pointer
           transition-colors ease-in-out duration-200 focus:outline-none 
           focus-visible:ring-2 focus-visible:ring-white 
           focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6 bg-primary' : 'translate-x-0 bg-white'}
            pointer-events-none inline-block h-[22px] w-[22px]
            rounded-full shadow-lg transform ring-0 transition ease-in-out
             duration-200`}
        />
      </_Switch>
    </div>
  );
}
