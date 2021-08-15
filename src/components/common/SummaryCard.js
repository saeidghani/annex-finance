import React from 'react';
import greenArrow from '../../assets/icons/greenArrow.svg';
import redArrow from '../../assets/icons/redArrow.svg';

export default function SummaryCard({ title, name, icon, status }) {
  let arrow;
  if (status == 'green') {
    arrow = <img src={greenArrow} alt="green arrow" />;
  } else {
    arrow = <img src={redArrow} alt="red arrow" />;
  }

  return (
    <div className="border border-solid border-primary rounded-lg w-full flex items-center">
      <div className="flex justify-between items-center w-full p-4 lg:py-0 lg:px-5">
        <div className="">
          <div className="flex items-center space-x-2">
            {arrow}
            <div className="text-white text-base md:text-sm">{name}</div>
          </div>
          <div className="text-white text-xl font-bold">{title}</div>
        </div>
        <div className="">
          <img src={icon} alt={name} />
        </div>
      </div>
    </div>
  );
}
