import React from 'react';
import Modal from '../UI/Modal';
import logoMini from '../../assets/icons/logoMini.svg';

function WalletsModal() {
  const title = (
    <div className="text-center text-xl font-bold mt-4 mx-12 py-6 border-b border-solid border-gray-600">
      aToken Balance
    </div>
  );

  const content = (
    <div className="p-14">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full bg-[#140E38] p-4 border border-solid border-gray-600">
          <img className="" src={logoMini} alt="logo" />
        </div>
        <div className="text-xl font-bold mt-6">0.00000000</div>
        <div className="text-sm mt-2">$0.00</div>
      </div>
      <div className="flex flex-col space-y-8 mt-10">
        <div
          className="flex justify-between items-center pb-6
                        border-b border-solid border-gray-600"
        >
          <div className="text-white text-lg">Wallet Balance</div>
          <div className="">0.0000</div>
        </div>
        <div
          className="flex justify-between items-center pb-6
                        border-b border-solid border-gray-600"
        >
          <div className="text-white text-lg">Unclaimed Balance</div>
          <div className="">0.0000</div>
        </div>
        <div className="flex justify-between items-center pb-6">
          <div className="text-white text-lg">Price</div>
          <div className="">0.00</div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button className="bg-primary py-4 rounded text-2xl w-full max-w-[350px] text-black">
          Nothing to Claim
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal title={title} content={content} onCloseModal={() => {}} width="xl" />
    </div>
  );
}

export default WalletsModal;
