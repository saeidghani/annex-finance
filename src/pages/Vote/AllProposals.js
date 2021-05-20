import React from 'react';
import Progress from '../../components/UI/Progress';
import rightArrow from '../../assets/icons/rightArrow.svg';
import circleCross from '../../assets/icons/circleCross.svg';
import circleTick from '../../assets/icons/circleTick.svg';
import FootNote from './FootNote';

export default function AllProposals({ onSelectProposal }) {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 mt-8">
        <div className="text-primary text-48">Governance Proposals</div>
        <div className="flex items-center space-x-4">
          <Progress
            className="text-white"
            type="circle"
            color="#4FD000"
            percent={19}
            strokeWidth={10}
            width={110}
            symbolClassName="flex text-white"
          />
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-lighterBlue w-7 h-5 rounded-3xl"></div>
              <div className="">Active</div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-lightGreen w-7 h-5 rounded-3xl"></div>
              <div className="">Passed</div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-darkGray w-7 h-5 rounded-3xl"></div>
              <div className="">Failed</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fadeBlack py-6 px-10 rounded-3xl mt-8">
        <div className="text-white text-2xl font-bold mb-4">All Proposals</div>
        {[1, 2, 3, 4].map((i) => (
          <div className="mt-2" key={i}>
            <div
              className="flex justify-between border-b border-solid border-lightGray py-4 cursor-pointer"
              onClick={onSelectProposal}
            >
              <div className="">
                <div className="text-white text-24">Just Abstain, Courteously</div>
                <div className="flex items-center space-x-2 mt-4">
                  <button
                    className={`focus:outline-none ${
                      i === 2 ? 'text-green' : 'text-gray'
                    } py-1 px-2 rounded text-xs
                                 border border-solid ${
                                   i === 2 ? 'border-green' : 'border-lightGray'
                                 }`}
                  >
                    {i === 2 ? 'Passed' : 'Failed'}
                  </button>
                  <div className="text-gray">030 - Failed April 17th, 2021</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex flex-col items-center space-y-2">
                  {i === 2 ? <img src={circleTick} alt="" /> : <img src={circleCross} alt="" />}
                </div>
                <div className="text-white">{i === 2 ? 'Executed' : 'Failed'}</div>
              </div>
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
      <FootNote />
    </div>
  );
}
