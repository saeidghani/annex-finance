import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import SummaryCard from '../components/common/SummaryCard';
import SupplyWithdrawModal from '../components/common/SupplyWithdrawModal';
import BorrowRepayModal from '../components/common/BorrowRepayModal';
import ConnectWalletModal from '../components/common/ConnectWalletModal';
import BalanceModal from '../components/common/BalanceModal';
import ConfirmTransactionModal from '../components/common/ConfirmTransactionModal';
import EnableCollateralModal from '../components/common/EnableCollateralModal';
import CandleChart from '../components/common/CandleChart';
import Select from '../components/UI/Select';
import Switch from '../components/UI/Switch';
import dollar from '../assets/icons/dollar.svg';

export default function Demo() {
  return (
    <Layout wrapperClassName="">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <button className="bgPrimaryGradient p-4">Click</button>
        <div className="w-72">
          <SummaryCard>
            <img src={dollar} alt="dollar" />
          </SummaryCard>
        </div>
        <Select />
        <div className="w-20">
          <Switch />
        </div>
        <CandleChart />
      </div>
    </Layout>
  );
}
