import React from 'react';
import Modal from '../UI/Modal';

function HistoryModal({ open, onSetOpen, onCloseModal }) {
  const title = <div className="text-center text-36 font-bold mt-10 mx-6">Recent Transactions</div>;

  const content = (
    <div className="flex flex-col items-center pt-10 pb-12 px-6">
      <div className="text-24">No recent transactions</div>
      <button
        className="focus:outline-none py-4 mt-10 w-full
                   rounded-10px text-black text-24 bgPrimaryGradient"
        style={{ maxWidth: 320 }}
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
        width="max-w-900"
      />
    </div>
  );
}

export default HistoryModal;
