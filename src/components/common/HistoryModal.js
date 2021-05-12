import React from 'react';
import Modal from '../UI/Modal';

function HistoryModal({ open, onSetOpen, onCloseModal }) {
  const title = <div className="text-center text-xl mt-10 mx-6">Recent Transactions</div>;

  const content = (
    <div className="flex flex-col items-center pt-10 pb-12 px-6">
      <div className="">No recent transactions</div>
      <button
        className="focus:outline-none py-2 px-14 mt-4
                   rounded-md text-black text-lg bgPrimaryGradient"
        onClick={onCloseModal}
      >
        Close
      </button>
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

export default HistoryModal;
