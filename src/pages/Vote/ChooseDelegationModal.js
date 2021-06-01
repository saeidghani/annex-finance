import React from 'react';
import Modal from '../../components/UI/Modal';
import bigArrowPrimary from '../../assets/icons/bigArrowPrimary.svg';
import tickGreen from '../../assets/icons/tickGreen.svg';

function ChooseDelegationModal({ open, onSetOpen, onCloseModal, openCreatePostModal }) {
  const title = <div className="text-center text-36 font-bold mt-10">Choose Delegation Type</div>;

  const content = (
    <div className="pt-6 pb-8 px-12">
      <div className="flex flex-col space-y-8">
        <div
          className="flex justify-between items-start cursor-pointer
                     py-6 border-t border-b border-solid border-lightGray"
          onClick={openCreatePostModal}
        >
          <div className="flex items-start space-x-4">
            <img className="mt-2 w-9" src={tickGreen} alt="tick" />
            <div className="">
              <div className="text-white text-24">Manual Voting</div>
              <div className="text-white text-24 mt-4">
                This option allows you to vote on proposals directly from your connected wallet.
              </div>
            </div>
          </div>
          <button className="mt-2 focus:outline-none">
            <img className="" src={bigArrowPrimary} alt="arrow" />
          </button>
        </div>
        <div
          className="flex justify-between items-start cursor-pointer
                     py-6"
          onClick={openCreatePostModal}
        >
          <div className="flex items-start space-x-4">
            <img className="mt-2 w-9" src={tickGreen} alt="tick" />
            <div className="">
              <div className="text-white text-24">Delegate Voting</div>
              <div className="text-white text-24 mt-4 w-180">
                This option allows you to delegate your votes to another Ethereum address. You never
                send Venus, only your voting rights, and can undelegate at any time.
              </div>
            </div>
          </div>
          <button className="mt-2 focus:outline-none">
            <img className="" src={bigArrowPrimary} alt="arrow" />
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
        width="max-w-900"
      />
    </div>
  );
}

export default ChooseDelegationModal;
