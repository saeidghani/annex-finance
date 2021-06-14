import React from 'react';
import Modal from '../../components/UI/Modal';
import bigArrowPrimary from '../../assets/icons/bigArrowPrimary.svg';
import tickGreen from '../../assets/icons/tickGreen.svg';

function ChooseDelegationModal({ open, onSetOpen, onCloseModal, openCreatePostModal }) {
  const title = <div className="text-center text-36 font-bold mt-10">Choose Delegation Type</div>;

  const items = [
    {
      key: 1,
      title: 'Manual Voting',
      text: 'This option allows you to vote on proposals directly from your connected wallet.',
    },
    {
      key: 2,
      title: 'Delegate Voting',
      text:
        'This option allows you to delegate your votes to another Ethereum address. ' +
        'You never send Venus, only your voting rights, and can undelegate at any time.',
    },
  ];

  const content = (
    <div className="pt-6 pb-8 mx-12 overflow-auto">
      <div className="flex flex-col space-y-8">
        {items.map((i) => (
          <div key={i.key} className="cursor-pointer py-6" onClick={openCreatePostModal}>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <img className="w-8" src={tickGreen} alt="tick" />
                <div className="text-white text-24">{i.title}</div>
              </div>
              <button className="mt-2 focus:outline-none">
                <img className="" src={bigArrowPrimary} alt="arrow" />
              </button>
            </div>
            <div className="text-white text-24 mt-4">{i.text}</div>
          </div>
        ))}
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
