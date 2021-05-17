import React from 'react';
import Modal from '../../components/UI/Modal';
import bigArrowPrimary from '../../assets/icons/bigArrowPrimary.svg';
import tickGreen from '../../assets/icons/tickGreen.svg';

function ChooseDelegationModal({ open, onSetOpen, onCloseModal, openCreatePostModal }) {
  const title = (
    <div className="flex justify-center mt-10">
      <div className="text-2xl font-bold">Choose Delegation Type</div>
    </div>
  );

  const content = (
    <div className="p-14">
      <div className="flex flex-col space-y-8">
        <div
          className="flex justify-between items-start cursor-pointer"
          onClick={openCreatePostModal}
        >
          <div className="flex items-start space-x-4">
            <img className="w-12" src={tickGreen} alt="arrow" />
            <div className="">
              <div className="text-white text-xl">Manual Voting</div>
              <div className="text-white text-base mt-4">
                This option allows you to vote on proposals directly from your connected wallet.
              </div>
            </div>
          </div>
          <button className="mt-2 focus:outline-none">
            <img className="" src={bigArrowPrimary} alt="arrow" />
          </button>
        </div>
        <div
          className="flex justify-between items-start cursor-pointer"
          onClick={openCreatePostModal}
        >
          <div className="flex items-start space-x-4">
            <img className="w-12" src={tickGreen} alt="arrow" />
            <div className="">
              <div className="text-white text-xl">Delegate Voting</div>
              <div className="text-white text-base mt-4">
                This option allows you to delegate your votes to another Ethereum address. You never
                send Venus, only your voting rights, and can undelegate at any time.
              </div>
            </div>
          </div>
          <button className="mt-2 focus:outline-none">
            <img className="w-16" src={bigArrowPrimary} alt="arrow" />
          </button>
        </div>
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

export default ChooseDelegationModal;
