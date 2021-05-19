import React, { useState } from 'react';
import settings from '../../assets/icons/settings.svg';
import settingsBlack from '../../assets/icons/settingsBlack.svg';
import history from '../../assets/icons/history.svg';
import historyBlack from '../../assets/icons/historyBlack.svg';
import BTN from '../../assets/icons/BTN.svg';
import LTC from '../../assets/icons/LTC.svg';
import blackArrow from '../../assets/icons/blackArrow.svg';
import whiteArrow from '../../assets/icons/whiteArrow.svg';
import ValueRange from './ValueRange';

const cryptos = [
  { name: 'BTN', logo: <img className="" src={BTN} alt="" /> },
  { name: 'LTC', logo: <img className="" src={LTC} alt="" /> },
  { name: 'LTC', logo: <img className="" src={LTC} alt="" /> },
  { name: 'LTC', logo: <img className="" src={LTC} alt="" /> },
  { name: 'LTC', logo: <img className="" src={LTC} alt="" /> },
];

function Swap({ onSettingsOpen, onHistoryOpen }) {
  const [rangeValues, setRangeValues] = useState({});

  return (
    <div className="py-10 w-full max-w-2xl mt-6">
      <div
        className={`w-full max-w-2xl py-8 px-6 sm:px-10 rounded-3xl mb-4 ${
          rangeValues.from && rangeValues.to ? 'bg-primary' : 'bg-black'
        }`}
      >
        <div className="flex justify-between">
          <div className="">
            <div
              className={`text-xl 2xl:text-24 font-bold ${
                rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'
              }`}
            >
              Exchange
            </div>
            <div
              className={`md:text-xs 2xl:text-18 mt-3 ${
                rangeValues.from && rangeValues.to ? 'text-black' : 'text-gray'
              }`}
            >
              Trade tokens in an instant
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
          <img
            className="mt-12 mb-4"
            src={rangeValues.from && rangeValues.to ? whiteArrow : blackArrow}
            alt=""
          />
          <ValueRange
            title="To"
            name="to"
            rangeValues={rangeValues}
            options={cryptos}
            onSetRangeValues={(e) => setRangeValues({ ...rangeValues, to: e.target.value })}
          />
        </div>
        <div className="flex justify-between text-white mt-6">
          <div
            className={
              rangeValues.from && rangeValues.to ? 'text-black text-18' : 'text-white text-18'
            }
          >
            Slippage Tolerance
          </div>
          <div
            className={
              rangeValues.from && rangeValues.to ? 'text-black text-18' : 'text-white text-18'
            }
          >
            1%
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className={`focus:outline-none py-2 px-12 text-black text-24 ${
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
        <div className="bg-black w-full p-8 rounded-2xl flex flex-col space-y-2 mt-10">
          <div className="flex justify-between">
            <div className="text-white text-22 font-bold">Minimum Received</div>
            <div className="text-white text-22 font-bold">3.804 ANN</div>
          </div>
          <div className="flex justify-between">
            <div className="text-white text-22 font-bold">Price Impact</div>
            <div className="text-white text-22 font-bold">0.01%</div>
          </div>
          <div className="flex justify-between">
            <div className="text-white text-22 font-bold">Liquidity Provider Fee</div>
            <div className="text-white text-22 font-bold">0.05 BNB</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Swap;
