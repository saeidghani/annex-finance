import React from 'react';
import Chart from './Chart';

function Details() {
  return (
    <div className="bg-fadeBlack p-6 mt-10">
      <div className="bg-black w-full h-60">
        <Chart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-y-4 md:gap-y-0 md:gap-x-4 mt-4">
        <div className="bg-black p-4 col-span-3">
          <div className="text-white font-bold">Interest Rate Model</div>
          <div className="text-white text-sm">Utilization vs. APY</div>
        </div>
        <div className="bg-black text-white p-4 col-span-5">
          <div className="flex justify-between py-2">
            <div className="font-bold">Price</div>
            <div className="font-bold">$62737.38</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="flex justify-between py-3 border-t border-solid border-gray">
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
