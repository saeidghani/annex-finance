/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import { useQuery } from '../../hooks/useQuery';
import Switch from '../../components/UI/Switch';
import GetAnnModal from './GetAnnModal';
import helpOutline from '../../assets/icons/helpOutline.svg';
import logoBlack from '../../assets/icons/logoBlack.svg';
import refresh from '../../assets/icons/refresh.svg';
import calculator from '../../assets/icons/calculator.svg';
import metaMask from '../../assets/icons/metaMask.svg';
import expandPrimary from '../../assets/icons/expandPrimary.svg';
import arrowPrimary from '../../assets/icons/arrowPrimary.svg';
import finishedLabel from '../../assets/icons/finishedLabel.svg';

function Pools() {
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;
  const [displayDetails, setDisplayDetails] = useState([]);
  const [getAnnOpen, setGetAnnOpen] = useState(false);

  useEffect(() => {
    setQuery({ tab: 'live' });
  }, []);

  const buttons = [
    { key: 1, title: 'Live', tab: 'live' },
    { key: 2, title: 'Finished', tab: 'finished' },
  ];

  const LiveCard = ({ id, isFinished }) => (
    <div className="">
      <div
        className={`px-6 flex justify-between rounded-t-3xl relative h-118px ${
          isFinished ? 'bg-darkGray' : 'bgPrimaryGradient'
        }`}
      >
        <div className="text-white flex flex-col justify-center">
          <div className="2xl:text-24 font-bold">Auto ANN</div>
          <div className="2xl:text-18">Automatic restaking</div>
        </div>
        {isFinished && (
          <img className="absolute right-0 top-0" src={finishedLabel} alt="finished" />
        )}
        <img className="py-8" src={logoBlack} alt="logo" />
      </div>
      <div className="bg-black text-white rounded-b-3xl">
        <div className="flex flex-col space-y-4 p-6">
          <div className="flex justify-between">
            <div className="text-18">ANN:</div>
            <div className="flex items-center space-x-2">
              <div className="font-bold text-18">143.94%</div>
              <img src={calculator} alt="" />
            </div>
          </div>
          {!isFinished ? (
            <>
              <div className="text-18">Recent ANN Profit:</div>
              <div className="text-14">0.1% unstaking fee if withdrawn within 72h</div>
            </>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm">ANN Earned</div>
                <div className="text-sm">0</div>
                <div className="text-sm">~0 USD</div>
              </div>
              <button
                className={`text-black focus:outline-none py-1.5 px-4
                     rounded-md text-xl flex items-center space-x-2 ${
                       isFinished ? 'bg-darkGray' : 'bg-primary'
                     }`}
                onClick={() => {}}
              >
                <div className="font-bold">Harvest</div>
              </button>
            </div>
          )}
          <div className="text-sm">STACK ANN</div>
          <button
            className={`self-center text-black focus:outline-none
                     py-2.5 px-24 rounded-3xl text-14 ${isFinished ? 'bg-darkGray' : 'bg-primary'}`}
            onClick={() => setGetAnnOpen(true)}
          >
            Enable
          </button>
        </div>
        <div className="border-t border-solid border-lightGray p-6">
          <div className="flex items-center justify-between">
            <button
              className={`text-black focus:outline-none
                     px-4 rounded-3xl text-xl flex items-center space-x-2 ${
                       isFinished ? 'bg-darkGray' : 'bg-primary'
                     }`}
              onClick={() => {}}
            >
              <img src={refresh} alt="" />
              <div className="text-sm py-1">{isFinished ? 'Manual' : 'Auto'}</div>
            </button>
            <div
              className="flex items-center space-x-8"
              onClick={() => {
                if (displayDetails?.includes(id)) {
                  const newDisplayDetails = displayDetails?.filter((d) => d !== id);
                  setDisplayDetails(newDisplayDetails);
                } else {
                  setDisplayDetails((prevState) => [...prevState, id]);
                }
              }}
            >
              <div className="text-primary text-14 font-bold cursor-pointer">
                {displayDetails.includes(id) ? 'Hide' : 'Details'}
              </div>
              <img
                className={`cursor-pointer ${
                  displayDetails.includes(id) ? '' : 'transform rotate-180'
                }`}
                src={arrowPrimary}
                alt=""
              />
            </div>
          </div>
          {displayDetails.includes(id) && (
            <div className="mt-8">
              <div className="flex justify-between">
                <div className="font-bold text-14">Total Staked:</div>
                <div className="text-14">18,916,290.331 ANN</div>
              </div>
              <div className="flex justify-between my-4">
                <div className="text-14">Performance Fee</div>
                <div className="text-14">2%</div>
              </div>
              <div className="flex justify-end items-center space-x-2">
                <div className="text-12">View Project Site</div>
                <img src={expandPrimary} alt="" />
              </div>
              <div className="flex justify-end items-center space-x-2">
                <div className="text-12">View Contract</div>
                <img src={expandPrimary} alt="" />
              </div>
              <div className="flex justify-end items-center space-x-2">
                <div className="text-12">Add to Metamask</div>
                <img className="w-4" src={metaMask} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Layout mainClassName="">
      <GetAnnModal
        open={getAnnOpen}
        onSetOpen={() => setGetAnnOpen(true)}
        onCloseModal={() => setGetAnnOpen(false)}
      />
      <div className="bg-fadeBlack pt-4 pb-12 px-2 md:px-6 mt-12 flex flex-col items-center">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 items-center md:space-x-9">
          <div className="flex items-center space-x-2">
            {buttons?.map((b) => (
              <button
                key={b.key}
                className={`focus:outline-none py-1 px-12 rounded-3xl text-xl 2xl:text-24 ${
                  b.tab === tab
                    ? 'text-black font-bold bgPrimaryGradient'
                    : 'text-white bg-transparent border border-solid border-lightGray'
                }`}
                onClick={() => setQuery({ tab: b.tab })}
              >
                {b.title}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Switch wrapperClassName="py-0 mt-2" />
            <div className="text-white 2xl:text-24">Staked only</div>
          </div>
          <button
            className="bg-primary text-black focus:outline-none py-0.5 px-6 rounded-md text-lg
                       flex items-center space-x-2"
            onClick={() => {}}
          >
            <div className="2xl:text-24 py-1">Help</div>
            <img className="w-6" src={helpOutline} alt="" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <LiveCard isFinished={tab === 'finished'} id={i} />
            </div>
          ))}
        </div>
        <button
          className="bgPrimaryGradient text-black focus:outline-none
                     py-2 px-16 rounded-3xl text-24 flex items-center space-x-2 mt-8"
          onClick={() => {}}
        >
          View More
        </button>
      </div>
    </Layout>
  );
}

export default Pools;
