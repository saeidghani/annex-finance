import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import SummaryFilledCard from '../components/common/SummaryFilledCard';
import SummaryOutlineCard from '../components/common/SummaryOutlineCard';
import DataTable from '../components/common/DataTable';
import SupplyWithdrawModal from '../components/common/SupplyWithdrawModal';
import BorrowRepayModal from '../components/common/BorrowRepayModal';
import WalletsModal from '../components/common/WalletsModal';
import BalanceModal from '../components/common/BalanceModal';
import ConfirmTransactionModal from '../components/common/ConfirmTransactionModal';
import EnableCollateralModal from '../components/common/EnableCollateralModal';
import Select from '../components/UI/Select';
import Switch from '../components/UI/Switch';
import dollar from '../assets/icons/dollar.svg';

export default function Demo() {
  return (
    <Layout wrapperClassName="">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <button className="bgPrimaryGradient p-4">Click</button>
        <SummaryFilledCard />
        <div className="w-72">
          <SummaryOutlineCard>
            <img src={dollar} alt="dollar" />
          </SummaryOutlineCard>
        </div>
        <Select />
        <Switch />
        <DataTable title="Supply Market" />
        <SupplyWithdrawModal />
        <BorrowRepayModal />
        <WalletsModal />
        <BalanceModal />
        <ConfirmTransactionModal />
        <EnableCollateralModal />
      </div>
    </Layout>
  );
}
