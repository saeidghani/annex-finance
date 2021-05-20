import React from 'react';
import Modal from '../../components/UI/Modal';
import crossPrimary from '../../assets/icons/crossPrimary.svg';

function GetAnnModal({ open, onSetOpen, onCloseModal }) {
  const title = (
    <div
      className="flex items-center justify-between py-8 px-8
                    border-b border-solid border-primary"
    >
      <div className="text-36 font-bold">ROI</div>
      <div className="cursor-pointer" onClick={onCloseModal}>
        <img className="w-5" src={crossPrimary} alt="" />
      </div>
    </div>
  );

  const content = (
    <div className="pt-6 pb-10 px-8">
      <div className="grid grid-cols-3 justify-items-start">
        <div className="text-24 font-bold">TIMEFRAME</div>
        <div className="text-24 font-bold justify-self-center">ROI</div>
        <div className="text-24 font-bold">ANN PER $1000</div>
      </div>
      <div className="grid grid-cols-3 justify-items-start mt-8 text-24">
        <div>1d</div>
        <div className="justify-self-center">0.23</div>
        <div>0.6</div>
        <div>1d</div>
        <div className="justify-self-center">0.23</div>
        <div>0.6</div>
        <div>1d</div>
        <div className="justify-self-center">0.23</div>
        <div>0.6</div>
        <div>1d</div>
        <div className="justify-self-center">0.23</div>
        <div>0.6</div>
      </div>
      <div className="mt-10 text-24">
        <p className="">
          Calculated based on current rates. Compounding 288x daily. Rates are estimates provided
          for your convenience only, and by no means represent guaranteed returns.
        </p>
        <p className="mt-4">All estimated rates take into account this pool's 2% performance fee</p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="focus:outline-none bgPrimaryGradient mt-2 mb-8 px-24 py-4
                           rounded-3xl text-black text-24"
        >
          Get ANN
        </button>
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
        width="max-w-780"
      />
    </div>
  );
}

export default GetAnnModal;
