import React from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Table from './Table';
import expandBox from '../../assets/icons/expandBox.svg';
import tick from '../../assets/icons/tick.svg';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';

function Farms() {
  const subComponent = (
    <div className="flex justify-between w-full text-white lg:px-12 py-5">
      <div className="flex flex-col items-start mr-4 w-full max-w-sm">
        <div className="flex space-x-6">
          <div className="text-18">Get ANN-BNB LP</div>
          <img src={expandBox} alt="" />
        </div>
        <div className="flex space-x-6 mt-1">
          <div className="text-18">View Contract</div>
          <img src={expandBox} alt="" />
        </div>
        <div className="flex space-x-6 mt-1">
          <div className="text-18">See Pair Info</div>
          <img src={expandBox} alt="" />
        </div>
        <button
          className="font-bold text-white bg-primary px-4 py-1 mt-5
                           rounded-3xl flex items-center space-x-2"
        >
          <img src={tick} alt="" />
          <div className="text-lg 2xl:text-24 text-black">Core</div>
        </button>
      </div>
      <div
        className="flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row
                      2xl:justify-center 2xl:space-x-8 w-full max-w-600 xl:max-w-1000"
      >
        <div className="bg-primary p-4 rounded-lg w-full flex flex-col justify-between">
          <div className="text-black self-start text-20 2xl:text-24">ANN EARNED</div>
          <div className="flex items-center justify-between">
            <div className="font-bold text-black text-20 2xl:text-24">9845.558</div>
            <button className="font-bold text-white bg-lightBlue py-2 px-4 rounded text-20 2xl:text-24">
              Harvest
            </button>
          </div>
        </div>
        <div className="bg-primary p-4 rounded-lg w-full flex flex-col justify-between">
          <div className="text-black self-start mb-2 2xl:text-24">ENABLE FARM</div>
          <button className="font-bold text-white bg-lightBlue py-2 px-4 rounded w-full text-20 2xl:text-24">
            Enable
          </button>
        </div>
      </div>
    </div>
  );

  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Coin',
          accessor: 'coin',
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-start items-center space-x-2 pl-6">
                <img src={bitcoinBlack} alt="bitcoin" />
                <div className="">Bitcoin</div>
              </div>
            );
          },
        },
        {
          Header: 'Earned',
          accessor: 'earned',
          disableFilters: true,
        },
        {
          Header: 'APR',
          accessor: 'APR',
          disableFilters: true,
        },
        {
          Header: 'Liquidity',
          accessor: 'liquidity',
          disableFilters: true,
        },
        {
          Header: 'Multiplier',
          accessor: 'multiplier',
          disableFilters: true,
        },
        {
          // Make an expander cell
          Header: 'Action', // No header
          id: 'expander', // It needs an ID,
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: ({ row }) => (
            // Use Cell to render an expander for each row.
            // We can use the getToggleRowExpandedProps prop-getter
            // to build the expander.
            <span
              {...row.getToggleRowExpandedProps()}
              className={row.isExpanded ? 'text-primary' : 'text-red'}
            >
              Detail
            </span>
          ),
        },
      ],
    },
  ];

  const database = [
    {
      coin: 'Bitcoin',
      earned: '?',
      APR: 13.7,
      liquidity: 869.34,
      multiplier: 12,
      action: 'detail',
    },
    {
      coin: 'Ethereum',
      earned: '?',
      APR: 135.07,
      liquidity: 869.34,
      multiplier: 9,
      action: 'detail',
    },
    {
      coin: 'Ripple',
      earned: '?',
      APR: 132.27,
      liquidity: 869.34,
      multiplier: 10,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
    {
      coin: 'Litecoin',
      earned: '?',
      APR: 13.227,
      liquidity: 12869.34,
      multiplier: 11,
      action: 'detail',
    },
  ];

  const data = React.useMemo(() => database, []);

  return (
    <Layout mainClassName="py-8">
      <Table columns={columns} data={data} tdClassName="" subComponent={subComponent} />
    </Layout>
  );
}

export default Farms;
