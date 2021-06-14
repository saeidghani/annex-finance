import React, { useState } from 'react';
import Modal from '../../components/UI/Modal';
import closeWhite from '../../assets/icons/closeWhite.svg';
import bigArrow from '../../assets/icons/bigArrow.svg';
import avatar from '../../assets/icons/avatar.svg';
import expandBoxPrimary from '../../assets/icons/expandBoxPrimary.svg';

function DelegateVotingModal({ open, onSetOpen, onCloseModal }) {
  const [address, setAddress] = useState('');
  const [displayDelegates, setDisplayDelegates] = useState(false);

  const title = (
    <div
      className="flex justify-between items-center mt-4 mx-12 py-6
                  border-b border-solid border-lightGray"
    >
      <div className="">
        <img className="transform rotate-180 w-6" src={bigArrow} alt="" />
      </div>
      <div className="text-center text-36 font-bold">Delegate Voting</div>
      <div className="cursor-pointer" onClick={onCloseModal}>
        <img src={closeWhite} alt="" />
      </div>
    </div>
  );

  const content = (
    <div className="p-6">
      <div className="text-24 text-primary">Select an Address</div>
      <p className="text-24 mt-4">
        If you know the address you wish to delegate to, enter it below. If not, you can view the
        Delegate Leaderboard to find a political party you wish to support.
      </p>
      <div className="flex justify-between mt-8">
        <div className="text-24 text-primary">Delegate Address</div>
        <div className="text-24 text-darkRed">Delegate Leaderboard</div>
      </div>
      <input
        name="actionText"
        type="text"
        className="gray-placeholder border border-solid border-gray bg-darkGray
                           rounded-xl w-full focus:outline-none font-bold py-5 px-4 text-primary mt-14 mb-4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter a 0x address"
      />
      {displayDelegates && (
        <div className="bg-darkGray rounded-2xl border border-solid border-gray">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between border-b border-solid border-gray py-4 pl-10 pr-6"
            >
              <div className="flex space-x-4">
                <img src={avatar} alt="" />
                <div className="text-primary">
                  <div className="text-24">0x0462...7d32</div>
                  <div className="text-24">Voting Weight: 40.98%</div>
                </div>
              </div>
              <img src={expandBoxPrimary} alt="" />
            </div>
          ))}
          <div className="text-24 py-4  text-center">View Delegate Leaderboard</div>
        </div>
      )}
      {!displayDelegates && (
        <div className="flex justify-center mt-10">
          <button
            className="focus:outline-none bg-darkGray py-2 px-16 mb-2 rounded-md text-24 text-gray"
            onClick={() => setDisplayDelegates(true)}
          >
            Delegate Voting
          </button>
        </div>
      )}
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
      />
    </div>
  );
}

export default DelegateVotingModal;
