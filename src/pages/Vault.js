import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import greenAnn from '../assets/icons/greenAnn.svg';
import yellowAnn from '../assets/icons/yellowAnn.svg';

function Vault() {
  return (
    <Layout mainClassName="min-h-screen">
      <div className="bg-fadeBlack rounded-2xl text-white text-xl font-bold p-6 mt-8 mb-10">
        Vault
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-y-4 md:gap-y-0 md:gap-x-4 text-white mt-4">
        <div className="col-span-3 bg-fadeBlack rounded-2xl p-6 flex flex-col space-y-6">
          <div className="">
            <div className="">Available ANN to Stake</div>
            <div className="flex space-x-2 mt-2">
              <img src={greenAnn} alt="ANN" />
              <div className="font-bold">0 ANN</div>
            </div>
          </div>
          <div className="">
            <div className="">ANN Staked</div>
            <div className="flex space-x-2 mt-2">
              <img src={greenAnn} alt="ANN" />
              <div className="font-bold">0 ANN</div>
            </div>
          </div>
          <div className="">
            <div className="">Available ANN Rewards</div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex space-x-2">
                <img src={yellowAnn} alt="ANN" />
                <div className="font-bold">0 ANN</div>
              </div>
              <div className="">Claim</div>
            </div>
          </div>
          <div className="">
            <div className="">Venus Balance</div>
            <div className="flex space-x-2 mt-2">
              <img src={yellowAnn} alt="ANN" />
              <div className="font-bold">0 ANN</div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="bg-fadeBlack rounded-2xl p-6 flex flex-col items-center space-y-4">
            <div className="font-bold">Available ANN to Stake: 0 ANN</div>
            <div className="">To stake ANN, you need to approve it first.</div>
            <button
              className="bgPrimaryGradient font-bold focus:outline-none py-2 px-12
                         rounded-3xl text-xl text-black"
              onClick={() => {}}
            >
              Enable
            </button>
          </div>
          <div
            className="bg-fadeBlack rounded-2xl p-6 flex flex-col items-center
                          space-y-4 mt-4"
          >
            <div className="font-bold">ANN staked: 0 ANN</div>
            <div className="text-2xl">0 MAX</div>
            <button
              className="bgPrimaryGradient font-bold focus:outline-none py-2 px-12
                         rounded-3xl text-xl text-black"
              onClick={() => {}}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Vault;
