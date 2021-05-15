import React from 'react';

function Summary() {
  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
      <div
        className="bg-black rounded-2xl py-4 px-6
                      border border-solid border-primary text-white w-72"
      >
        <div className="text-lg">Daily Distribution</div>
        <div className="text-xl">17,290.58</div>
      </div>
      <div
        className="bg-black rounded-2xl py-4 px-6
                      border border-solid border-primary text-white w-72"
      >
        <div className="text-lg">Daily Distribution</div>
        <div className="text-xl">17,290.58</div>
      </div>
      <div
        className="bg-black rounded-2xl py-4 px-6
                      border border-solid border-primary text-white w-72"
      >
        <div className="text-lg">Daily Distribution</div>
        <div className="text-xl">17,290.58</div>
      </div>
    </div>
  );
}

export default Summary;
