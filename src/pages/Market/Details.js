import React from 'react';
import Chart from './Chart';

function Details() {
  return (
    <div className="bg-fadeBlack rounded-2xl p-6 mt-10">
      <div className="flex justify-center">
        <div className="bg-black rounded-2xl h-60 relative" style={{ width: '95%' }}>
          <Chart />
          <button className="bg-primary absolute top-4 left-4 text-sm rounded py-0.5 px-2.5">
            Supply
          </button>
          <button
            className="bg-blue absolute top-4 left-24
                             text-sm rounded text-white"
            style={{ padding: '2.5px 10px' }}
          >
            Borrow
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-y-4 md:gap-y-0 md:gap-x-4 mt-4">
        <div className="bg-black rounded-2xl p-4 col-span-3">
          <div className="text-white font-bold">Interest Rate Model</div>
          <div className="text-white text-sm">Utilization vs. APY</div>
        </div>
        <div className="col-span-5 bg-black rounded-2xl text-white py-4 px-6">
          <div className="flex justify-between py-2">
            <div className="font-bold">Price</div>
            <div className="font-bold">$62737.38</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="flex justify-between py-3
                                   border-t border-solid border-lightGray"
            >
              <div className="text-xs">Market Liquidity</div>
              <div className="text-xs">31,637.69462809 BTCB</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
