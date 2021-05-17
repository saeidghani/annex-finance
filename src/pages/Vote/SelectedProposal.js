import React from 'react';
import tickGreen from '../../assets/icons/tickGreen.svg';
import tickGray from '../../assets/icons/tickGray.svg';

export default function SelectedProposal({ displayProposalDetail }) {
  return (
    <div className="py-4">
      <div
        className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between
                      items-center mt-4 sm:mt-0"
      >
        <div className="text-white">
          <div className="text-3xl text-center sm:text-left">Governance</div>
          <div className="text-xl mt-6 text-center sm:text-left">VIP-12 V2 Upgrade Part 3/3</div>
          <div className="flex space-x-8 mt-2">
            <div className="text-gray">14 Active April 16, 2021</div>
            <div className="text-primary">Active</div>
            <div className="text-white">2 days, 22 hrs left</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="bg-lightGreen2 p-6 rounded-3xl text-white w-80">
            You can't cancel the proposal while the proposer voting weight meets proposal threshold
          </p>
          <div className="sm:self-end flex justify-end space-x-4 mt-6 sm:mt-10">
            <button
              className="focus:outline-none bg-primary text-black py-2 px-8 rounded text-base"
              onClick={() => {}}
            >
              Execute
            </button>
            <button
              className="focus:outline-none bg-primary text-black py-2 px-8 rounded text-base"
              onClick={() => {}}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 mt-6">
        <div className="bg-fadeBlack py-4 px-6 rounded-2xl">
          <div className="flex justify-between border-b border-solid border-primary py-4">
            <div className="text-white">For</div>
            <div className="text-white">300,402.18546615</div>
          </div>
          <div className="flex justify-between border-b border-solid border-gray py-2 mt-12">
            <div className="text-gray">27 addresses</div>
            <div className="text-gray">Vote</div>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex justify-between cursor-pointer
                         border-b border-solid border-gray py-2"
              onClick={displayProposalDetail}
            >
              <div className="text-white">0x1ca...6d7e</div>
              <div className="text-white">300,157.02829699</div>
            </div>
          ))}
          <div className="text-primary text-lg text-center mt-6">View All</div>
        </div>
        <div className="bg-fadeBlack py-4 px-6 rounded-2xl">
          <div className="flex justify-between border-b border-solid border-primary py-4">
            <div className="text-white">Against</div>
            <div className="text-white">0</div>
          </div>
          <div className="flex justify-between border-b border-solid border-gray py-2 mt-12">
            <div className="text-gray">0 addresses</div>
            <div className="text-gray">Vote</div>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-between border-b border-solid border-gray py-2">
              <div className="text-white">-</div>
              <div className="text-white">-</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-8 lg:gap-x-4 items-start mt-6">
        <div className="col-span-5 bg-fadeBlack rounded-2xl p-4">
          <div className="text-primary text-lg font-bold">Operation</div>
          <div className="mt-2 text-white">
            <div className="">_setImplementation(address,bool,bytes)</div>
            <div className="">_setImplementation(address,bool,bytes)</div>
            <div className="">_setImplementation(address,bool,bytes)</div>
          </div>
          <div className="text-primary text-lg font-bold mt-6">Description</div>
          <div className="text-white text-2xl font-bold mt-4">VIP-12 V2 Upgrade Part 3/3</div>
          <div className="text-primary text-lg font-bold mt-6">Summary</div>
          <div className="text-white mt-2">
            <p>
              The V2 Upgrade will have VAI Liquidation, VAI mint fee and vToken Redeem fees for
              stabilization markets.
            </p>
            <p className="mt-4">
              The Venus white paper has proposed VAI a liquidation module for VAI stabilization in
              Venus Protocol. VAI liquidation module will work same as vTokens liquidation module
              and support liquidation incentivize 10% and close factor 50%.
            </p>
            <p className="mt-4">
              Due to community suggestions, for VAI liquidation, the Venus Community have proposed
              VaiUnitroller.liquidateVAI() to liquidate the VAI minter more than borrow limit.
            </p>
            <p className="mt-4">
              VAI mint fee and vTokens Redeem fee will be 0.01% of the amount and transfer fees to
              VTreasury Contract controlled by governance for Venus Community Development, Burns,
              Marketing or Advertising.
            </p>
            <p className="mt-4">This proposal is upgrade part 3 and the v2 upgrade complete.</p>
          </div>
        </div>
        <div className="col-span-3 bg-fadeBlack rounded-2xl py-10 px-6">
          <div className="text-white text-xl">Proposal History</div>
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-y-6">
              <div
                className="col-start-2 flex items-start space-x-2
                                border-l-6 border-solid border-lightGreen pl-4"
              >
                <img className="w-5" src={tickGreen} alt="" />
                <div className="">
                  <div className="text-white">Created</div>
                  <div className="text-gray">April 16, 2021 1:55 PM</div>
                </div>
              </div>
              <div
                className="col-start-1 flex justify-end items-start space-x-2
                                border-r-6 border-solid border-lightGreen pr-4 -mr-1.5"
              >
                <div className="text-right">
                  <div className="text-white">Active</div>
                  <div className="text-gray">April 16, 2021 1:55 PM</div>
                </div>
                <img className="w-5" src={tickGreen} alt="" />
              </div>
              <div></div>
              <div
                className="col-start-2 flex items-start space-x-2
                                border-l-6 border-solid border-gray pl-4"
              >
                <img src={tickGray} alt="" />
                <div className="text-white">Succeed</div>
              </div>
              <div
                className="col-start-1 flex justify-end items-start space-x-2
                                border-r-6 border-solid border-gray pr-4 -mr-1.5"
              >
                <div className="text-white">Queue</div>
                <img src={tickGray} alt="" />
              </div>
              <div></div>
              <div
                className="col-start-2 flex items-start space-x-2
                                border-l-6 border-solid border-gray pl-4"
              >
                <img src={tickGray} alt="" />
                <div className="text-white">Execute</div>
              </div>
              <div></div>
              <div
                className="col-start-1 flex justify-end items-start space-x-2
                                border-r-6 border-solid border-lightGreen pr-4 -mr-1.5"
              >
                <div className="text-right">
                  <div className="text-white">Active</div>
                  <div className="text-gray">April 16, 2021 1:55 PM</div>
                </div>
                <img className="w-5" src={tickGreen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
