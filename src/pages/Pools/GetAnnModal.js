import React from 'react';
import Modal from '../../components/UI/Modal';
import crossPrimary from '../../assets/icons/crossPrimary.svg';

function GetAnnModal({ open, onSetOpen, onCloseModal }) {
  const title = (
    <div
      className="flex items-center justify-between py-4 px-8
                    border-b border-solid border-primary"
    >
      <div className="text-2xl font-bold">ROI</div>
      <div className="cursor-pointer" onClick={onCloseModal}>
        <img className="w-5" src={crossPrimary} alt="" />
      </div>
    </div>
  );

  const content = (
    <div className="pt-6 pb-10 px-8">
      <div className="grid grid-cols-3 justify-items-center">
        <div className="font-bold">TIMEFRAME</div>
        <div className="font-bold">ROI</div>
        <div className="font-bold">ANN PER $1000</div>
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        <div>1d</div>
        <div>0.23</div>
        <div>0.6</div>
        <div>1d</div>
        <div>0.23</div>
        <div>0.6</div>
        <div>1d</div>
        <div>0.23</div>
        <div>0.6</div>
        <div>1d</div>
        <div>0.23</div>
        <div>0.6</div>
      </div>
      <div className="mt-10">
        <p className="">
          Calculated based on current rates. Compounding 288x daily. Rates are estimates provided
          for your convenience only, and by no means represent guaranteed returns.
        </p>
        <p className="mt-4">All estimated rates take into account this pool's 2% performance fee</p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="mt-2 focus:outline-none bgPrimaryGradient px-12 py-2 rounded-3xl text-black">
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
        width="max-w-xl"
      />
    </div>
  );
}

export default GetAnnModal;
