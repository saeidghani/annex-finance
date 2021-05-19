import React from 'react';

function Summary({ displayDetails, summaryItems }) {
  return (
    <div className={displayDetails ? 'bg-fadeBlack p-6 rounded-2xl' : ''}>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-4 md:gap-x-4 px-10 md:px-0">
        {summaryItems.map((i) => (
          <div
            key={i.key}
            className="bg-black rounded-2xl py-4 px-6
                      border border-solid border-primary text-white"
          >
            <div className="text-lg">{i.title}</div>
            <div className="text-xl 2xl:text-24">{i.num}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
