import React from 'react';
import Progress from '../../components/UI/Progress';
import FootNote from './FootNote';
import Layout from '../../layouts/MainLayout/MainLayout';
import wallet from '../../assets/icons/wallet.svg';
import user from '../../assets/icons/user.svg';
import tickGreen from '../../assets/icons/tickGreen.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';

export default function ProposalDetail() {
  return (
    <Layout>
      <div className="pt-8 pb-2">
        <div className="text-white">
          <div className="text-3xl text-primary">Details</div>
          <div className="flex items-center space-x-8 mt-2">
            <div className="text-24">0x1ca3ac3686071be692be7f1fbecd668641476d7e</div>
            <img className="" src={wallet} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-4 md:gap-y-0 md:grid-cols-8 md:gap-x-6 mt-8">
          <div className="col-span-3 bg-fadeBlack pt-4 pb-6 px-6 rounded-2xl">
            <div className="text-primary text-24 border-b border-solid border-lightGray py-4">
              Holding
            </div>
            <div className="border-b border-solid border-lightGray py-2">
              <div className="text-white text-18">Annex Balance</div>
              <div className="text-white text-24">0</div>
            </div>
            <div className="border-b border-solid border-lightGray py-2">
              <div className="flex justify-between ">
                <div className="">
                  <div className="text-white text-18">Votes</div>
                  <div className="text-white text-24">300,157.0282</div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={user} alt="" />
                  <div className="text-white text-18">158</div>
                </div>
              </div>
              <Progress wrapperClassName="mt-2 mb-4" />
            </div>
            <div className="text-white mt-8">
              <div className="text-14">Delegating To</div>
              <div className="text-18">Undelegated</div>
            </div>
          </div>
          <div className="col-span-5 bg-fadeBlack pt-8 pb-8 px-6 rounded-2xl">
            <div className="text-primary text-24">Transactions</div>
            <div
              className="flex justify-between
                          border-b border-solid border-darkBlue2 py-2 mt-4"
            >
              <div className="text-gray text-24">Action</div>
              <div className="text-gray text-24">Age</div>
              <div className="text-gray text-24">Result</div>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="grid grid-cols-3 border-b border-solid border-darkBlue2 py-4">
                <div className="justify-self-start text-white text-24 text-center">
                  Received Votes
                </div>
                <div className="text-white text-24 text-center">0 days ago</div>
                <div className="justify-self-end flex space-x-10">
                  <img src={arrowUp} alt="" />
                  <div className="text-white text-24 pr-4">1</div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-6">
              <button className="focus:outline-none bg-primary text-black text-24 py-2 px-14 rounded">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-fadeBlack py-6 px-10 rounded-3xl mt-6">
          <div className="text-primary text-24 font-bold mt-4">Voting History</div>
          {[1, 2, 3, 4].map((i) => (
            <div className="mt-6" key={i}>
              <div
                className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:justify-between
                            border-b border-solid border-darkBlue2 py-4 cursor-pointer"
              >
                <div className="">
                  <div className="text-white text-24">VIP-1 Governance Launch</div>
                  <div className="flex space-x-3 text-white text-18 mt-2">
                    <div>1</div>
                    <div>Executed</div>
                    <div>January 15th, 2021</div>
                    <div className="text-lightGreen">Passed</div>
                  </div>
                </div>
                <Progress wrapperClassName="w-72" percent={100} color="#4FD000" />
                <img className="" src={tickGreen} alt="" />
                <div className="font-bold text-white text-24 md:pr-8">For</div>
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
              <div className="text-primary text-18">Next</div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <FootNote />
      </div>
    </Layout>
  );
}
