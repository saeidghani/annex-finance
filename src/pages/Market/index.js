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
              <div className="flex flex-col justify-center items-center space-x-2">
                <img src={bitcoinBlack} alt="bitcoin" />
                <div className="">{props.value}</div>
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
              <div className="flex flex-col justify-center items-center space-x-2">
                <div className="font-bold">$976.5M</div>
                <div className="text-sm">975,870,678</div>
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
              <div className="flex flex-col justify-center items-center space-x-2">
                <div className="font-bold">$976.5M</div>
                <div className="text-sm">975,870,678</div>
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
              <div className="flex flex-col justify-center items-center space-x-2">
                <div className="font-bold">$976.5M</div>
                <div className="text-sm">975,870,678</div>
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
              <div className="flex flex-col justify-center items-center space-x-2">
                <div className="font-bold">$976.5M</div>
                <div className="text-sm">975,870,678</div>
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
            return (
              <div className="flex flex-col justify-center items-center space-x-2">
                <div className="font-bold">${props.value}</div>
              </div>
            );
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
  ];

  const data = React.useMemo(() => database, []);

  return (
    <Layout mainClassName="min-h-screen py-8">
      <Summary />
      {!displayDetails && (
        <Table columns={columns} data={data} onRowClick={() => setDisplayDetails(true)} />
      )}
      {displayDetails && <Details />}
    </Layout>
  );
}

export default Market;
