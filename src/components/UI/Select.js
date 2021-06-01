/* eslint-disable */
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import MiniLogo from './MiniLogo';

const people = [
  { name: 'Wade Cooper', logo: <MiniLogo size="sm" /> },
  { name: 'Arlene Mccoy', logo: <MiniLogo size="sm" /> },
  { name: 'Devon Webb', logo: <MiniLogo size="sm" /> },
  { name: 'Tom Cook', logo: <MiniLogo size="sm" /> },
  { name: 'Tanya Fox', logo: <MiniLogo size="sm" /> },
  { name: 'Hellen Schmidt', logo: <MiniLogo size="sm" /> },
];

export default function Select({
  type = 'primary',
  options = people,
  width = 'w-56',
  label,
  labelClassName,
  logoClassName,
  placeholder,
}) {
  const [selected, setSelected] = useState(placeholder || options[0]);

  return (
    <div className={width}>
      <Listbox placeholder="aaaa" value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative z-10">
              <Listbox.Button
                className={`relative w-full pl-3 pr-10 text-left
              shadow-md cursor-default focus:outline-none
              focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
               focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2
               focus-visible:border-indigo-500 sm:text-sm bg-transparent border border-solid ${
                 type === 'primary'
                   ? 'border-primary rounded-4xl'
                   : type === 'basic'
                   ? 'border-gray rounded-10px py-2'
                   : type === 'mini'
                   ? 'border-none shadow-none'
                   : 'bg-primary rounded-4xl'
               }`}
              >
                <div className="flex items-center space-x-4 py-0.5">
                  {selected?.logo && (
                    <div className={logoClassName ? logoClassName : ''}>{selected?.logo}</div>
                  )}
                  <div>
                    {label && <div className={labelClassName}>{label}</div>}
                    <span
                      className={`block truncate ${
                        type === 'primary'
                          ? 'text-primary text-24 font-bold'
                          : type === 'basic'
                          ? 'text-white text-18'
                          : type === 'primaryBlack'
                          ? 'text-xs pb-2'
                          : ''
                      }`}
                    >
                      {selected?.name}
                    </span>
                  </div>
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon
                    className={`w-6 hover:text-violet-100 mr-2 ${
                      type === 'primary' ? 'text-primary' : type === 'basic' ? 'text-white' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute w-full py-1 mt-1 overflow-auto text-base text-white bg-fadeBlack
                   rounded-b-md shadow-lg max-h-28 ring-1 ring-black ring-opacity-5
                   border border-solid border-gray focus:outline-none sm:text-sm"
                >
                  {options.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          select-none relative py-1 pl-4 pr-4 cursor-pointer`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center space-x-2">
                          {option?.logo && (
                            <div className={logoClassName ? logoClassName : ''}>{option?.logo}</div>
                          )}
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate ${type === 'basic' ? 'text-18' : 'text-24'}`}
                          >
                            {option.name}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
