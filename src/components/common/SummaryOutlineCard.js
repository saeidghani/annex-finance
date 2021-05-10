import React from 'react';
import greenArrow from '../../assets/icons/greenArrow.svg';

export default function SummaryOutlineCard({ children }) {
  return (
    <div className="border border-solid border-primary rounded-lg w-full">
      <div className="flex justify-between py-10 px-4">
        <div className="">
          <div className="flex items-center space-x-2">
            <img src={greenArrow} alt="greenArrow" />
            <div className="text-white text-lg">ANN Balance</div>
          </div>
          <div className="text-white text-2xl font-bold">198.54789 ANN</div>
        </div>
        {children}
      </div>
    </div>
  );
}
