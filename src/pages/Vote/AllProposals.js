import React from 'react';
import Progress from '../../components/UI/Progress';
import tickBlack from '../../assets/icons/tickBlack.svg';
import cross from '../../assets/icons/cross.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';

export default function AllProposals({ onSelectProposal }) {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 mt-4">
        <div className="text-primary text-4xl">Governance Proposals</div>
        <div className="flex items-center space-x-6">
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
        <div className="text-white text-2xl font-bold">All Proposals</div>
        {[1, 2, 3, 4].map((i) => (
          <div className="mt-6" key={i}>
            <div
              className="flex justify-between border-b border-solid border-gray py-4 cursor-pointer"
              onClick={onSelectProposal}
            >
              <div className="">
                <div className="text-white">Just Abstain, Courteously</div>
                <div className="flex items-center space-x-2 mt-4">
                  <button
                    className={`focus:outline-none ${
                      i === 2 ? 'text-green' : 'text-gray'
                    } py-1 px-2 rounded text-xs
                                 border border-solid ${i === 2 ? 'border-green' : 'border-gray'}`}
                  >
                    Passed
                  </button>
                  <div className="text-gray">030 - Failed April 17th, 2021</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`w-6 h-6 rounded-full ${i === 2 ? 'bg-lightGreen' : 'bg-darkGray'}`}
                  ></div>
                  {i === 2 ? <img src={tickBlack} alt="" /> : <img src={cross} alt="" />}
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
      <div className="flex justify-end mt-4 mr-4 md:mr-0">
        <div className="flex items-center space-x-4">
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
