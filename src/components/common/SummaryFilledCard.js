import React from 'react';
import greenArrow from '../../assets/icons/greenArrow.svg';
import inflation from '../../assets/icons/inflation.svg';

export default function SummaryFilledCard() {
  return (
    <div className="bg-primary rounded-lg">
      <div className="p-10">
        <div className="flex items-center space-x-2">
          <img src={greenArrow} alt="greenArrow" />
          <div className="text-white text-lg">ANN Balance</div>
        </div>
        <div className="text-white text-2xl font-bold">198.54789 ANN</div>
      </div>
      <img src={inflation} alt="inflation" />
    </div>
  );
}
