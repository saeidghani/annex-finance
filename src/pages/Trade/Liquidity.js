import React, { useState } from 'react';
import settings from '../../assets/icons/settings.svg';
import settingsBlack from '../../assets/icons/settingsBlack.svg';
import history from '../../assets/icons/history.svg';
import historyBlack from '../../assets/icons/historyBlack.svg';
import Select from '../../components/UI/Select';
import BTN from '../../assets/icons/BTN.svg';
import LTC from '../../assets/icons/LTC.svg';
import help from '../../assets/icons/help.svg';
import ethereumLogo from '../../assets/icons/ethereumLogo.svg';
import bnbLogo from '../../assets/icons/bnbLogo.svg';
import blackPlus from '../../assets/icons/blackPlus.svg';
import whitePlus from '../../assets/icons/whitePlus.svg';
import ValueRange from './ValueRange';

const cryptos = [
  { name: 'BTN', logo: <img src={BTN} alt="" /> },
  { name: 'LTC', logo: <img src={LTC} alt="" /> },
];

function Liquidity({ onSettingsOpen, onHistoryOpen }) {
  const [rangeValues, setRangeValues] = useState({});
  const [addLiquidity, setAddLiquidity] = useState(false);

  const InputSummary = () => (
    <div className="bg-blueGray border border-solid border-primary rounded-2xl py-2 px-6 pr-0 w-full">
      <div className="flex justify-between">
        <div className="text-white flex flex-col space-y-5">
          <div className="">Input</div>
          <div className="font-bold">0.001</div>
        </div>
        <div className="text-white flex flex-col space-y-2">
          <div className="self-end pr-6">Balance 0</div>
          <div className="flex space-x-2 items-center">
            <div className="font-bold">MAX</div>
            <Select type="mini" width="w-40" options={cryptos} />
          </div>
        </div>
      </div>
    </div>
  );

  const PlusIcon = () => (
    <div className=" mt-12 mb-4">
      {rangeValues.from && rangeValues.to ? (
        <img src={whitePlus} alt="" />
      ) : (
        <img src={blackPlus} alt="" />
      )}
    </div>
  );

  return (
    <div className="py-10 w-full max-w-2xl">
      <div className="w-full max-w-2xl py-8 px-6 sm:px-10 bg-black rounded-3xl my-4">
        {!addLiquidity && (
          <div className="">
            <div className="flex justify-between">
              <div
                className={`font-bold ${
                  rangeValues.from && rangeValues.to ? 'text-black text-24' : 'text-white text-24'
                }`}
              >
                Liquidity
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
              <div className="flex justify-center mt-6">
                <button
                  className="focus:outline-none py-2 px-12 text-24 text-black bgPrimaryGradient rounded-3xl"
                  onClick={() => setAddLiquidity(true)}
                >
                  Add Liquidity
                </button>
              </div>
            </div>
            <div className="text-white font-bold mt-6 text-24">Your Liquidity</div>
            <div className="text-white text-18 mt-6 text-center">No Liquidity</div>
            <div className="text-white text-18 mt-6">
              Don't see a pool you joined? <span className="text-primary">Import it.</span>
            </div>
            <div className="text-white text-18">
              Or, if you staked your LP tokens in a farm, unstake them to see them here.
            </div>
          </div>
        )}
        {addLiquidity && (!rangeValues.from || !rangeValues.to) && (
          <div>
            <div className="flex justify-between">
              <div
                className={`text-24 ${
                  rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'
                }`}
              >
                Add Liquidity
              </div>
              <div className="cursor-pointer" onClick={() => {}}>
                <img src={help} alt="help" />
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
              <PlusIcon />
              <ValueRange
                title="To"
                name="to"
                rangeValues={rangeValues}
                options={cryptos}
                onSetRangeValues={(e) => setRangeValues({ ...rangeValues, to: e.target.value })}
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="focus:outline-none py-2 px-12 text-black text-24 rounded-sm
                                 bgPrimaryGradient rounded-3xl"
              >
                Enter Your Amount
              </button>
            </div>
          </div>
        )}
        {addLiquidity && rangeValues.from && rangeValues.to && (
          <div className="flex flex-col space-y-8 items-center">
            <div className="flex justify-between w-full">
              <div
                className={`text-xl ${
                  rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'
                }`}
              >
                Add Liquidity
              </div>
              <div className="cursor-pointer" onClick={() => {}}>
                <img src={help} alt="help" />
              </div>
            </div>
            <InputSummary />
            {rangeValues.from && rangeValues.to ? (
              <img className=" mt-12 mb-4" src={blackPlus} alt="" />
            ) : (
              <img className=" mt-12 mb-4" src={whitePlus} alt="" />
            )}
            <InputSummary />
            <div className="bg-primary p-6 rounded-3xl w-full">
              <div className="font-bold text-18">PRICE AND POOL SHARE</div>
              <div className="flex justify-between mt-4 px-6">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-22">0.192147</div>
                  <div className="mt-2 text-24">ETH per BNB</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-22">5.20436</div>
                  <div className="mt-2 text-24">BNB per ETH</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-22">0.01%</div>
                  <div className="mt-2 text-24">Share of Pool</div>
                </div>
              </div>
            </div>
            <button className="focus:outline-none py-2 px-12 text-black text-24 bg-white rounded-3xl">
              Insufficient ETH Balance
            </button>
          </div>
        )}
      </div>
      {addLiquidity && rangeValues.from && rangeValues.to && (
        <div className="bg-blueGray p-6 rounded-3xl w-full border border-solid border-primary mt-14">
          <div className="font-bold text-primary text-24">LP TOKENS IN YOUR WALLET</div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <img src={ethereumLogo} alt="ethereum" />
              <img className="ml-2" src={bnbLogo} alt="bnb" />
              <div className="text-white text-24 font-bold ml-6">ETH / BNB</div>
            </div>
            <div className="text-white text-2xl font-bold">0</div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-primary text-24 font-bold">ETH:</div>
            <div className="text-primary text-24 font-bold">0</div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-primary text-24 font-bold">BNB:</div>
            <div className="text-primary text-24 font-bold">0</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Liquidity;
