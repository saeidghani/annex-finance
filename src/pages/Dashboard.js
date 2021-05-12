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
      <div className="cursor-pointer" onClick={() => setSupplyWithdrawOpen(true)}>
        4.61%
      </div>
    ),
    Wallet: (
      <div className="cursor-pointer" onClick={() => setSupplyWithdrawOpen(true)}>
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
      <div className="cursor-pointer" onClick={() => setBorrowRepayOpen(true)}>
        4.61%
      </div>
    ),
    Wallet: (
      <div className="cursor-pointer" onClick={() => setBorrowRepayOpen(true)}>
        $0 BTCB
      </div>
    ),
    Liquidity: (
      <div className="cursor-pointer" onClick={() => setBorrowRepayOpen(true)}>
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
          className="bg-primary text-white rounded-lg py-2 px-6 mx-6 lg:mx-0
                        flex justify-between items-center space-x-4 mt-5"
        >
          <MiniLogo size="sm" />
          <p className="text-black flex-grow">
            This is Beta of aToken v1. It is provided "as is" and we don't make any warranties,
            including that Akropolis is error-free or secure. Use it at your own risk.
          </p>
          <div className="cursor-pointer" onClick={() => setDisplayWarning(false)}>
            <img src={close} alt="close" />
          </div>
        </div>
      )}
      <div className="text-white mt-5">
        <div className="px-6 lg:px-0">
          <div className="text-primary text-3xl">$65,123</div>
          <div className="mt-1">Available Credit</div>
          <div className="flex items-center w-full mt-4">
            <div className="text-gray-500 whitespace-nowrap mr-2">Borrow Limit</div>
            <div className="mr-4">0%</div>
            <Progress wrapperClassName="w-full" />
            <div className="">$0.00</div>
          </div>
        </div>
        <div className="bg-fadeBlack flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-4 p-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
          </div>
          <div className="bg-black flex justify-between w-full p-4">
            <div className="">
              <div className="">
                <div className="">Supply Balance</div>
                <div className="">$0</div>
              </div>
              <div className="mt-12">
                <div className="">ANN Earned</div>
                <div className="">$0</div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center py-4">
              <div className="relative">
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
                <div className="flex flex-col items-center absolute top-4 left-5 md:top-14 md:left-10">
                  <div className="text-primary">$0</div>
                  <div className="text-xs md:text-sm text-center mt-4 md:mt-8">
                    Estimated Daily <br /> Earnings
                  </div>
                </div>
              </div>
              <Switch />
              <div className="flex">
                <img src={fire} alt="" />
                <div className="ml-2">APY with XVS</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-right">
                <div className="">Borrow Balance</div>
                <div className="">$0</div>
              </div>
              <div className="mt-12">
                <div className="">Net APY</div>
                <div className="">$0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row lg:space-x-4 mt-5">
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
            <div className="flex space-x-4 text-white">
              <div className="text-sm sm:text-md">Overview</div>
              <div className="text-sm sm:text-md">ANN</div>
              <div className="text-sm sm:text-md">aSXP</div>
              <div className="text-sm sm:text-md">To MetaMask</div>
            </div>
          </div>
          <div className="flex justify-between text-white mt-4">
            <div className="ml-4 md:ml-8">Historical rates</div>
            <div className="">
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
