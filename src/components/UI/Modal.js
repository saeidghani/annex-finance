import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef, useEffect, useState } from 'react';

export default function Modal({ title, content, onCloseModal, width }) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef();

  function closeModal() {
    setOpen(false);
    onCloseModal();
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-black bg-white
          rounded-md hover:bg-opacity-30 focus:outline-none
          focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`bg-fadeBlack inline-block w-full my-8 overflow-hidden
              text-left align-middle transition-all transform shadow-xl rounded-2xl max-w-${
                width || '2xl'
              }`}
              >
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                  {title}
                </Dialog.Title>
                <div className="mt-2 text-white">{content}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
