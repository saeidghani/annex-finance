import React, { useState } from 'react';
import Modal from '../UI/Modal';

function SettingsModal({ open, onSetOpen, onCloseModal }) {
  const [selectedSlippage, setSelectedSlippage] = useState(1);

  const slippages = [
    { key: 1, value: '0.1%' },
    { key: 2, value: '0.5%' },
    { key: 3, value: '1%' },
    { key: 4, value: '0.1' },
  ];

  const title = <div className="text-left text-2xl mt-10 mx-6">Settings</div>;

  const content = (
    <div className="pt-10 pb-12 px-6">
      <div className="">Slippage tolerance</div>
      <div className="flex items-center space-x-4 mt-8">
        {slippages?.map((s, index) => (
          <button
            key={s?.key}
            className={`focus:outline-none py-4 px-10 rounded-md
                            text-white text-xl font-bold ${
                              selectedSlippage === s?.key ? 'bg-primary' : 'bg-fadeBlue'
                            } ${index === slippages?.length - 1 ? 'flex-grow' : ''}`}
            onClick={() => setSelectedSlippage(s?.key)}
          >
            {s?.value}
          </button>
        ))}
        <div className="text-xl">%</div>
      </div>
      <div className="text-darkRed mt-8">Your transaction may fail</div>
      <div className="text-xl mt-8">Transaction deadline</div>
      <div className="flex items-center space-x-4 mt-6">
        <button
          className="focus:outline-none bg-fadeBlue py-4 px-10 rounded-md
                            text-white text-xl font-bold"
        >
          20
        </button>
        <div className="">Minutes</div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        title={title}
        content={content}
        open={open}
        onSetOpen={onSetOpen}
        onCloseModal={onCloseModal}
        afterCloseModal={() => {}}
        width=""
      />
    </div>
  );
}

export default SettingsModal;
