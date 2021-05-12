/*eslint-disable*/
import React, { useState } from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import settings from '../assets/icons/settings.svg';
import Select from '../components/UI/Select';
import SettingsModal from '../components/common/SettingsModal';
import HistoryModal from '../components/common/HistoryModal';
import history from '../assets/icons/history.svg';
import BTN from '../assets/icons/BTN.svg';
import LTC from '../assets/icons/LTC.svg';
import arrowCircle from '../assets/icons/arrowCircle.svg';

const cryptos = [
  { name: 'BTN', logo: <img src={BTN} alt="" /> },
  { name: 'LTC', logo: <img src={LTC} alt="" /> },
];

const ValueRange = ({ title, name, rangeValues, onSetRangeValues }) => (
  <div className="">
    <div className="text-white">{title}</div>
    <div className="flex justify-between items-center space-x-4">
      <input
        id={name}
        name={name}
        type="text"
        className="border border-solid border-gray bg-transparent
                           rounded-md h-58px mt-1 w-full focus:outline-none text-white font-bold p-4"
        value={rangeValues[name]}
        onChange={onSetRangeValues}
      />
      <Select type="basic" options={cryptos} />
    </div>
  </div>
);

function Swap() {
  const [rangeValues, setRangeValues] = useState({});
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <Layout mainClassName="py-10">
      <SettingsModal open={settingsOpen} onCloseModal={() => setSettingsOpen(false)} />
      <HistoryModal open={historyOpen} onCloseModal={() => setHistoryOpen(false)} />
      <div className={`flex flex-col justify-center items-center space-y-10 p-10 bg-fadeBlack`}>
        <div className="flex space-x-4">
          <button
            className="focus:outline-none bgPrimaryGradient py-2 px-12 rounded-3xl
                            text-black text-xl font-bold"
          >
            Swap
          </button>
          <button
            className="focus:outline-none bg-transparent py-2 px-12 rounded-3xl
                             text-white text-xl border border-solid border-gray"
          >
            Liquidity
          </button>
        </div>
        <div
          className={`w-full max-w-2xl py-8 px-10 ${
            rangeValues.from && rangeValues.to ? 'bg-primary' : 'bg-black'
          }`}
        >
          <div className="flex justify-between">
            <div className="">
              <div className="text-white text-xl font-bold">Exchange</div>
              <div className="text-gray text-xs mt-1">Trade tokens in an instant</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full cursor-pointer" onClick={() => setSettingsOpen(true)}>
                <img className="w-full" src={settings} alt="settings" />
              </div>
              <div className="w-full cursor-pointer" onClick={() => setHistoryOpen(true)}>
                <img src={history} alt="history" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <ValueRange
              title="From"
              name="from"
              rangeValues={rangeValues}
              onSetRangeValues={(e) => setRangeValues({ ...rangeValues, from: e.target.value })}
            />
            <img className="mx-auto mt-8 mb-2" src={arrowCircle} alt="" />
            <ValueRange
              title="To"
              name="to"
              rangeValues={rangeValues}
              onSetRangeValues={(e) => setRangeValues({ ...rangeValues, to: e.target.value })}
            />
          </div>
          <div className="flex justify-between text-white mt-6">
            <div className="">Slippage Tolerance</div>
            <div className="">1%</div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="focus:outline-none bgPrimaryGradient py-2 px-12 rounded-sm text-black">
              Enter an Amount
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Swap;
