import React, { useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import Layout from '../../layouts/MainLayout/MainLayout';
import SettingsModal from '../../components/common/SettingsModal';
import HistoryModal from '../../components/common/HistoryModal';
import Swap from './Swap';
import Liquidity from './Liquidity';

function Trade() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;

  const buttons = [
    { key: 1, title: 'Swap', tab: 'swap' },
    { key: 2, title: 'Liquidity', tab: 'liquidity' },
  ];

  return (
    <Layout mainClassName="py-10" title={tab === 'swap' ? 'SWAP' : 'LIQUIDITY'}>
      <SettingsModal open={settingsOpen} onCloseModal={() => setSettingsOpen(false)} />
      <HistoryModal open={historyOpen} onCloseModal={() => setHistoryOpen(false)} />
      <div className="bg-fadeBlack w-full flex flex-col justify-center items-center rounded-3xl">
        <div className="flex space-x-4 mt-14">
          {buttons?.map((b) => (
            <button
              key={b.key}
              className={`focus:outline-none py-2 px-12 rounded-3xl text-xl 2xl:text-24 ${
                b.tab === tab
                  ? 'text-black font-bold bgPrimaryGradient'
                  : 'text-white bg-black border border-solid border-gray'
              }`}
              onClick={() => setQuery({ tab: b.tab })}
            >
              {b.title}
            </button>
          ))}
        </div>
        {tab === 'swap' && (
          <Swap
            onSettingsOpen={() => setSettingsOpen(true)}
            onHistoryOpen={() => setHistoryOpen(true)}
          />
        )}
        {tab === 'liquidity' && (
          <Liquidity
            onSettingsOpen={() => setSettingsOpen(true)}
            onHistoryOpen={() => setHistoryOpen(true)}
          />
        )}
      </div>
    </Layout>
  );
}

export default Trade;
