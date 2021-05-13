import React, { useState } from 'react';
import settings from '../../assets/icons/settings.svg';
import settingsBlack from '../../assets/icons/settingsBlack.svg';
import history from '../../assets/icons/history.svg';
import historyBlack from '../../assets/icons/historyBlack.svg';
import BTN from '../../assets/icons/BTN.svg';
import LTC from '../../assets/icons/LTC.svg';
import arrowCircle from '../../assets/icons/arrowCircle.svg';
import ValueRange from './ValueRange';

const cryptos = [
  { name: 'BTN', logo: <img src={BTN} alt="" /> },
  { name: 'LTC', logo: <img src={LTC} alt="" /> },
];

function Swap({ onSettingsOpen, onHistoryOpen }) {
  const [rangeValues, setRangeValues] = useState({});

  return (
    <div className="py-10 w-full max-w-2xl">
      <div
        className={`w-full max-w-2xl py-8 px-10 ${
          rangeValues.from && rangeValues.to ? 'bg-primary' : 'bg-black'
        }`}
      >
        <div className="flex justify-between">
          <div className="">
            <div
              className={`text-xl font-bold ${
                rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'
              }`}
            >
              Exchange
            </div>
            <div
              className={`text-xs mt-1 ${
                rangeValues.from && rangeValues.to ? 'text-black' : 'text-gray'
              }`}
            >
              Swap tokens in an instant
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-full cursor-pointer" onClick={onSettingsOpen}>
              <img
                className="w-full"
                src={rangeValues.from && rangeValues.to ? settingsBlack : settings}
                alt="settings"
              />
            </div>
            <div className="w-full cursor-pointer" onClick={onHistoryOpen}>
              <img
                src={rangeValues.from && rangeValues.to ? historyBlack : history}
                alt="history"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <ValueRange
            title="From"
            name="from"
            rangeValues={rangeValues}
            options={cryptos}
            onSetRangeValues={(e) => setRangeValues({ ...rangeValues, from: e.target.value })}
          />
          <div
            className={`rounded-full w-6 h-6 relative mt-8 mb-2 ${
              rangeValues.from && rangeValues.to ? 'bg-white' : 'bg-primary'
            }`}
          >
            <img className="absolute top-1 left-1" src={arrowCircle} alt="" />
          </div>
          <ValueRange
            title="To"
            name="to"
            rangeValues={rangeValues}
            options={cryptos}
            onSetRangeValues={(e) => setRangeValues({ ...rangeValues, to: e.target.value })}
          />
        </div>
        <div className="flex justify-between text-white mt-6">
          <div className={rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'}>
            Slippage Tolerance
          </div>
          <div className={rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'}>1%</div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className={`focus:outline-none py-2 px-12 text-black ${
              rangeValues.from && rangeValues.to
                ? 'bg-white rounded-3xl'
                : 'bgPrimaryGradient rounded-sm'
            }`}
          >
            Enter an Amount
          </button>
        </div>
      </div>
      {rangeValues.from && rangeValues.to && (
        <div className="bg-black w-full p-8 rounded-3xl flex flex-col space-y-2">
          <div className="flex justify-between">
            <div className="text-white text-lg font-bold">Minimum Received</div>
            <div className="text-white text-lg font-bold">3.804 ANN</div>
          </div>
          <div className="flex justify-between">
            <div className="text-white text-lg font-bold">Price Impact</div>
            <div className="text-white text-lg font-bold">0.01%</div>
          </div>
          <div className="flex justify-between">
            <div className="text-white text-lg font-bold">Liquidity Provider Fee</div>
            <div className="text-white text-lg font-bold">0.05 BNB</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Swap;
