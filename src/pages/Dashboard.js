/*eslint-disable*/
import React, { useState } from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import SummaryCard from '../components/common/SummaryCard';
import DataTable from '../components/common/DataTable';
import CandleChart from '../components/common/CandleChart';
import MiniLogo from '../components/UI/MiniLogo';
import Progress from '../components/UI/Progress';
import Switch from '../components/UI/Switch';
import Select from '../components/UI/Select';
import { fillArray } from '../utils';
import close from '../assets/icons/close.svg';
import ANNBalance from '../assets/icons/ANN-Balance.svg';
import DailyEarning from '../assets/icons/Daily-Earning.svg';
import ANNRewards from '../assets/icons/ANN-Rewards.svg';
import AnnualEarning from '../assets/icons/Annual-Earning.svg';
import plusButonIcon from '../assets/icons/plusButonIcon.svg';
import fire from '../assets/icons/fire.svg';
import bitcoin from '../assets/icons/bitcoin.svg';
import SupplyWithdrawModal from '../components/common/SupplyWithdrawModal';
import BorrowRepayModal from '../components/common/BorrowRepayModal';
import BalanceModal from '../components/common/BalanceModal';
import ConfirmTransactionModal from '../components/common/ConfirmTransactionModal';
import EnableCollateralModal from '../components/common/EnableCollateralModal';

function Dashboard() {
  const [displayWarning, setDisplayWarning] = useState(true);
  const [supplyWithdrawOpen, setSupplyWithdrawOpen] = useState(false);
  const [borrowRepayOpen, setBorrowRepayOpen] = useState(false);
  const [balanceOpen, setBalanceOpen] = useState(false);
  const [confirmTransactionOpen, setConfirmTransactionOpen] = useState(false);
  const [enableCollateralOpen, setEnableCollateralOpen] = useState(false);

  const baseColumns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Asset',
          accessor: 'Asset',
        },
        {
          Header: 'Apy',
          accessor: 'Apy',
        },
        {
          Header: 'Wallet',
          accessor: 'Wallet',
        },
      ],
    },
  ];

  const supplyColumns = React.useMemo(
    () => [
      ...baseColumns,
      {
        Header: 'Collateral',
        accessor: 'Collateral',
      },
    ],
    [],
  );

  const borrowColumns = React.useMemo(
    () => [
      ...baseColumns,
      {
        Header: 'Liquidity',
        accessor: 'Liquidity',
      },
    ],
    [],
  );

  const supplyItem = {
    Asset: (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setSupplyWithdrawOpen(true)}
      >
        <img className="w-6" src={bitcoin} alt="logoMini" />
        <div className="">BTCB</div>
      </div>
    ),
    Apy: (
      <div className="cursor-pointer text-red h-6" onClick={() => setSupplyWithdrawOpen(true)}>
        4.61%
      </div>
    ),
    Wallet: (
      <div className="cursor-pointer text-green h-8" onClick={() => setSupplyWithdrawOpen(true)}>
        $0 BTCB
      </div>
    ),
    Collateral: (
      <div className="cursor-pointer" onClick={() => setEnableCollateralOpen(true)}>
        <Switch wrapperClassName="pt-1 pb-0" />
      </div>
    ),
  };

  const supplyData = React.useMemo(() => fillArray(supplyItem, 1), []);
  const allMarketData = React.useMemo(() => fillArray(supplyItem, 5), []);

  const borrowItem = {
    Asset: (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setBorrowRepayOpen(true)}
      >
        <img className="w-6" src={bitcoin} alt="logoMini" />
        <div className="">BTCB</div>
      </div>
    ),
    Apy: (
      <div className="cursor-pointer text-red h-8" onClick={() => setBorrowRepayOpen(true)}>
        4.61%
      </div>
    ),
    Wallet: (
      <div className="cursor-pointer text-green h-8" onClick={() => setBorrowRepayOpen(true)}>
        $0 BTCB
      </div>
    ),
    Liquidity: (
      <div className="cursor-pointer text-primary h-8" onClick={() => setBorrowRepayOpen(true)}>
        $219,810,692.94
      </div>
    ),
  };

  const borrowData = React.useMemo(() => fillArray(borrowItem, 1), []);
  const allBorrowMarketData = React.useMemo(() => fillArray(borrowItem, 5), []);

  return (
    <Layout>
      <SupplyWithdrawModal
        open={supplyWithdrawOpen}
        onSetOpen={() => setSupplyWithdrawOpen(true)}
        onCloseModal={() => setSupplyWithdrawOpen(false)}
      />
      <BorrowRepayModal
        open={borrowRepayOpen}
        onSetOpen={() => setBorrowRepayOpen(true)}
        onCloseModal={() => setBorrowRepayOpen(false)}
      />
      <BalanceModal
        open={balanceOpen}
        onSetOpen={() => setBalanceOpen(true)}
        onCloseModal={() => setBalanceOpen(false)}
      />
      <ConfirmTransactionModal
        open={confirmTransactionOpen}
        onSetOpen={() => setConfirmTransactionOpen(true)}
        onCloseModal={() => setConfirmTransactionOpen(false)}
        onOpenBalanceModal={() => {
          setConfirmTransactionOpen(false);
          setBalanceOpen(true);
        }}
      />
      <EnableCollateralModal
        open={enableCollateralOpen}
        onSetOpen={() => setEnableCollateralOpen(true)}
        onCloseModal={() => setEnableCollateralOpen(false)}
        onOpenConfirmModal={() => {
          setEnableCollateralOpen(false);
          setConfirmTransactionOpen(true);
        }}
      />
      {displayWarning && (
        <div
          className="bg-primary text-white rounded-lg py-3 px-6 mx-6 lg:mx-0 text-lg
                        flex justify-between items-center space-x-4 mt-5"
        >
          <MiniLogo size="sm" />
          <p className="text-black flex-grow">
            This is Beta of <strong>aToken</strong> v1. It is provided "as is" and we don't make any warranties,
            including that Akropolis is error-free or secure. Use it at your own risk.
          </p>
          <div className="cursor-pointer" onClick={() => setDisplayWarning(false)}>
            <img src={close} alt="close" />
          </div>
        </div>
      )}
      <div className="text-white mt-10">
        <div className="px-6 lg:px-0 mb-17">
          <div className="text-primary text-5xl font-normal">$65,123</div>
          <div className="mt-1 text-lg">Available Credit</div>
          <div className="flex items-center w-full mt-4">
            <div className="opacity-70 whitespace-nowrap mr-2 text-lg">Borrow Limit</div>
            <div className="mr-4 text-lg">0%</div>
            <Progress wrapperClassName="w-full" />
            <div className=" text-lg">$0.00</div>
          </div>
        </div>
        <div className="bg-fadeBlack flex flex-col lg:flex-row justify-between lg:space-x-4 p-6">
          <div className="grid grid-cols-2 gap-9 w-full">
            <SummaryCard name="ANN Balance" title="198.54789 ANN" icon={ANNBalance} status="green" />
            <SummaryCard name="Daily Earning" title="$159890" icon={DailyEarning} status="green" />
            <SummaryCard name="ANN Rewards" title="$65,123" icon={ANNRewards} status="red" />
            <SummaryCard name="Annual Earning" title="$650,123" icon={AnnualEarning} status="red" />
          </div>
          <div className="bg-black flex justify-between w-full p-6 mt-0">
            <div className="">
              <div className="">
                <div className="text-lg font-bold">Supply Balance</div>
                <div className="text-lg font-bold">$0</div>
              </div>
              <div className="mt-12">
                <div className="text-lg">ANN Earned</div>
                <div className="text-lg">$0</div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center py-4">
              <div className="relative mb-4">
                <Progress
                  wrapperClassName="hidden md:block"
                  type="circle"
                  width={180}
                  percent={100}
                  strokeWidth={4}
                />
                <Progress
                  wrapperClassName="block md:hidden"
                  type="circle"
                  width={120}
                  percent={100}
                  strokeWidth={4}
                />
                <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
                  <div className="text-primary text-2xl">$0</div>
                  <div className="text-lg md:text-sm text-center mt-4 md:mt-8">
                    Estimated Daily <br /> Earnings
                  </div>
                </div>
              </div>
              <Switch />
              <div className="flex">
                <img src={fire} alt="" />
                <div className="ml-2 text-lg">APY with XVS</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-right">
                <div className="text-lg font-bold">Borrow Balance</div>
                <div className="text-lg font-bold">$0</div>
              </div>
              <div className="mt-12 text-right">
                <div className="text-lg">Net APY</div>
                <div className="text-lg">$0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  mt-5">
        <div className="fadeBlack w-full">
          <DataTable title="Supply" columns={supplyColumns} data={supplyData} />
          <DataTable title="All Supply Markets" columns={supplyColumns} data={allMarketData} />
        </div>
        <div className="fadeBlack w-full">
          <DataTable title="Borrow" columns={borrowColumns} data={borrowData} />
          <DataTable
            title="All Borrow Markets"
            columns={borrowColumns}
            data={allBorrowMarketData}
          />
        </div>
      </div>
      <div className="bg-fadeBlack py-4 px-6 mt-5">
        <div className="text-white text-2xl ml-2">Marketcap</div>
        <div className="bg-black md:p-6 mt-4">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-between">
            <Select />
            <div className="flex space-x-4text-2xl text-white">
              <div className="ml-4">Overview</div>
              <div className="ml-4">ANN <img src={plusButonIcon} alt="plusButonIcon" className="ml-2 inline" /></div>
              <div className="ml-4">aSXP <img src={plusButonIcon} alt="plusButonIcon" className="ml-2 inline" /></div>
              <div className="ml-4">To MetaMask</div>
            </div>
          </div>
          <div className="flex justify-between text-white mt-4">
            <div className="ml-4 md:ml-8">Historical rates</div>
            <div className="text-right">
              <div className="text-primary text-md sm:text-lg font-bold">4.65%</div>
              <div className="text-sm sm:text-md">Supply APY</div>
              <div className="text-sm sm:text-md">APY</div>
            </div>
          </div>
          <CandleChart />
          <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-14 md:px-12 mt-4">
            <div className="flex flex-col space-y-2 text-white w-full">
              <div className="flex justify-between">
                <div className="">Price</div>
                <div className="">$4.178</div>
              </div>
              <div className="flex justify-between">
                <div className="">Market Liquidity</div>
                <div className="">
                  45,870,154.97127461 <span className="text-red">SXP</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className=""># of Suppliers</div>
                <div className="">2,257</div>
              </div>
              <div className="flex justify-between">
                <div className=""># of Borrowers</div>
                <div className="">591</div>
              </div>
              <div className="flex justify-between">
                <div className="">Reserves</div>
                <div className="">
                  31233.90239403 <span className="text-red">SXP</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">Reserve Factor</div>
                <div className="">20%</div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-white w-full">
              <div className="flex justify-between">
                <div className="">Collateral Factor</div>
                <div className="">60%</div>
              </div>
              <div className="flex justify-between">
                <div className="">Total Supply</div>
                <div className="">$256,164,811.46</div>
              </div>
              <div className="flex justify-between">
                <div className="">Total Borrow</div>
                <div className="">$64,676,472.96</div>
              </div>
              <div className="flex justify-between">
                <div className="">Exchange Rate</div>
                <div className="">
                  1 <span className="text-red">SXP</span> = 49.875320
                  <span className="text-green">vSXP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
