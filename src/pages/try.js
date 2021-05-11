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

  return <Layout></Layout>;
}

export default Dashboard;
