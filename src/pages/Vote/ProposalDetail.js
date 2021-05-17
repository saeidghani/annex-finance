import React from 'react';
import wallet from '../../assets/icons/wallet.svg';
import user from '../../assets/icons/user.svg';
import Progress from '../../components/UI/Progress';
import tickGreen from '../../assets/icons/tickGreen.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';

export default function ProposalDetail() {
  return (
    <div className="pt-8 pb-2">
      <div className="text-white">
        <div className="text-3xl text-primary">Details</div>
        <div className="text-xl mt-6">0x1c...6d7e</div>
        <div className="flex space-x-8 mt-2">
          <div className="text-gray">0x1ca3ac3686071be692be7f1fbecd668641476d7e</div>
          <img src={wallet} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-x-6 mt-8">
        <div className="col-span-3 bg-fadeBlack py-4 px-6 rounded-2xl">
          <div className="text-primary text-xl border-b border-solid border-primary py-4">
            Holding
          </div>
          <div className="border-b border-solid border-gray py-2">
            <div className="text-white">Annex Balance</div>
            <div className="text-white">0</div>
          </div>
          <div className="border-b border-solid border-gray py-2">
            <div className="flex justify-between ">
              <div className="">
                <div className="text-white">Votes</div>
                <div className="text-white">300,157.0282</div>
              </div>
              <div className="flex items-center space-x-4">
                <img src={user} alt="" />
                <div className="text-white">158</div>
              </div>
            </div>
            <Progress wrapperClassName="mt-2 mb-4" />
          </div>
          <div className="text-white mt-8">
            <div>Delegating To</div>
            <div>Undelegated</div>
          </div>
        </div>
        <div className="col-span-5 bg-fadeBlack py-4 px-6 rounded-2xl">
          <div className="text-primary">Transactions</div>
          <div
            className="flex justify-between
                          border-b border-solid border-darkBlue2 py-2 mt-4"
          >
            <div className="text-gray">Action</div>
            <div className="text-gray">Age</div>
            <div className="text-gray">Result</div>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="grid grid-cols-3 border-b border-solid border-darkBlue2 py-4">
              <div className="justify-self-start text-white text-center">Received Votes</div>
              <div className="text-white text-center">0 days ago</div>
              <div className="justify-self-end text-white pr-4">1</div>
            </div>
          ))}
          <div className="flex justify-center mt-6">
            <button className="focus:outline-none bg-primary text-black py-2 px-14 rounded text-base">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-fadeBlack py-6 px-10 rounded-3xl mt-6">
        <div className="text-primary text-2xl font-bold mt-4">Voting History</div>
        {[1, 2, 3, 4].map((i) => (
          <div className="mt-6" key={i}>
            <div
              className="flex items-center justify-between
                            border-b border-solid border-darkBlue2 py-4 cursor-pointer"
            >
              <div className="">
                <div className="text-white">VIP-1 Governance Launch</div>
                <div className="flex space-x-3 text-white mt-2">
                  <div>1</div>
                  <div>Executed</div>
                  <div>January 15th, 2021</div>
                  <div className="text-lightGreen">Passed</div>
                </div>
              </div>
              <Progress wrapperClassName="w-72" percent={100} color="#4FD000" />
              <img src={tickGreen} alt="" />
              <div className="font-bold text-white text-xl pr-8">For</div>
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <div className="flex space-x-4">
            <div className="text-primary">1</div>
            <div className="text-white">2</div>
            <div className="text-white">3</div>
            <div className="text-white">4</div>
          </div>
          <div className="flex space-x-4">
            <div className="text-primary">Next</div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-4 mt-4">
          <div className="bg-primary w-6 h-6 rounded-full"></div>
          <div className="text-white">Latest Block: 7212174</div>
          <div className="text-white">ANN</div>
          <div className="text-white">Support</div>
          <div className="text-white">Whitepaper</div>
        </div>
      </div>
    </div>
  );
}
