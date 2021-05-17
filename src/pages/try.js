/* eslint-disable */
import React, { useState } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';
import Table from './Table';
import Summary from './Summary';
import Details from './Details';

function Market() {
  const [displayDetails, setDisplayDetails] = useState(false);

  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Coin',
          accessor: 'coin',
          disableFilters: true,
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-center items-center space-x-2 ml-6 sm:ml-0">
                <img className="w-8" src={bitcoinBlack} alt="bitcoin" />
                <div className="text-white">Bitcoin</div>
              </div>
            );
          },
        },
        {
          Header: 'Total Supply ',
          accessor: 'totalSupply ',
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-end space-x-2">
                  <div className="font-bold">$976.5M</div>
                  <div className="text-sm">975,870,678</div>
                </div>
              </div>
            );
          },
        },
        {
          Header: 'Supply APY',
          accessor: 'supplyAPY',
          disableFilters: true,
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-end space-x-2">
                  <div className="font-bold">$976.5M</div>
                  <div className="text-sm">975,870,678</div>
                </div>
              </div>
            );
          },
        },
        {
          Header: 'Total Borrow ',
          accessor: 'totalBorrow ',
          disableFilters: true,
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-end space-x-2">
                  <div className="font-bold">$976.5M</div>
                  <div className="text-sm">975,870,678</div>
                </div>
              </div>
            );
          },
        },
        {
          Header: 'Borrow APY ',
          accessor: 'borrowAPY ',
          disableFilters: true,
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-end space-x-2">
                  <div className="font-bold">$976.5M</div>
                  <div className="text-sm">975,870,678</div>
                </div>
              </div>
            );
          },
        },
        {
          Header: 'Price',
          accessor: 'price',
          disableFilters: true,
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return <div className="font-bold ml-6">$1</div>;
          },
        },
      ],
    },
  ];

  const database = [
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
    {
      coin: '',
      totalSupply: '',
      supplyAPY: '',
      totalBorrow: '',
      borrowAPY: '',
      price: '',
    },
  ];

  const data = React.useMemo(() => database, []);

  const summaryItems = displayDetails
    ? [
        { key: 1, title: 'Net Rate', num: '2.6%' },
        { key: 2, title: 'Supply APY', num: '0.7%' },
        { key: 3, title: 'Distribution APY', num: '1.8%' },
        { key: 4, title: 'Total Supply', num: '$2,552,779,876.63' },
      ]
    : [
        { key: 1, title: 'Total Supply', num: '$9,301,056,175.19' },
        { key: 2, title: 'Total Borrow', num: '$9,301,056,175.19' },
        { key: 3, title: 'Available Liquidity', num: '$9,301,056,175.19' },
      ];

  return (
    <Layout mainClassName="min-h-screen py-8">
      {displayDetails && (
        <div className="flex items-center space-x-4 mt-2 mb-6">
          <img src={bitcoinBlack} alt="BTCB" />
          <div className="text-white text-2xl font-bold ">BTCB</div>
        </div>
      )}
      <Summary displayDetails={displayDetails} summaryItems={summaryItems} />
      {!displayDetails && (
        <Table columns={columns} data={data} onRowClick={() => setDisplayDetails(true)} />
      )}
      {displayDetails && <Details />}
    </Layout>
  );
}

export default Market;
