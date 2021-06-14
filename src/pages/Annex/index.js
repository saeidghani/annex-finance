import React from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Table from './Table';
import Chart from './Chart';
import Progress from '../../components/UI/Progress';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';
import ripple from '../../assets/icons/ripple.svg';
import litecoin from '../../assets/icons/litecoin.svg';
import tezos from '../../assets/icons/tezos.svg';
import ethereum from '../../assets/icons/ethereum.svg';

function Annex() {
  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Rank',
          accessor: 'rank',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            console.log(props);
            return (
              <div className={`font-bold ${props?.row?.index < 2 ? 'text-midBlue' : 'text-gray'}`}>
                {props.value}
              </div>
            );
          },
        },
        {
          Header: 'Coin Market',
          accessor: 'coin',
          // eslint-disable-next-line react/display-name
          Cell: ({ value }) => {
            return (
              <div className="flex justify-start items-center space-x-2">
                <img
                  src={
                    value === 'Ethereum'
                      ? ethereum
                      : value === 'Ripple'
                      ? ripple
                      : value === 'Litecoin'
                      ? litecoin
                      : value === 'XRP'
                      ? bitcoinBlack
                      : value === 'Chainlink'
                      ? litecoin
                      : value === 'BitcoinCash'
                      ? bitcoinBlack
                      : value === 'Tezos'
                      ? tezos
                      : bitcoinBlack
                  }
                  alt="bitcoin"
                />
                <div className="font-semibold">{value}</div>
              </div>
            );
          },
        },
        {
          Header: 'Per Day',
          accessor: 'perDay',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return <div className="font-semibold">{props.value}</div>;
          },
        },
        {
          Header: 'Supply',
          accessor: 'supply',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            const greenIndexes = [0, 1, 2, 3, 7, 8];
            return (
              <div
                className={`font-semibold ${
                  greenIndexes.includes(props?.row?.index) ? 'text-green' : 'text-red'
                }`}
              >
                {props.value}
              </div>
            );
          },
        },
        {
          Header: 'Volume (24h)',
          accessor: 'volume',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return <div className="">{props.value}</div>;
          },
        },
        {
          Header: 'Borrow',
          accessor: 'borrow',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: ({ row }) => {
            const redItems = ['0', '3', '6', '7', '8'];
            return (
              <div className="w-60 md:w-72 mx-auto" style={{ height: 75 }}>
                <Chart
                  stroke={redItems?.includes(row?.id) ? '#ff4040' : '#3AB67A'}
                  fill={
                    redItems?.includes(row?.id)
                      ? 'rgba(253, 83, 83, 0.15)'
                      : 'rgba(9, 189, 60, 0.15)'
                  }
                />
              </div>
            );
          },
        },
      ],
    },
  ];

  const database = [
    {
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Ethereum',
      rank: '#2',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Ripple',
      rank: '#3',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Litecoin',
      rank: '#4',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Ethereum',
      rank: '#5',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'XRP',
      rank: '#6',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Chainlink',
      rank: '#7',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'BitcoinCash',
      rank: '#8',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Ethereum',
      rank: '#9',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Tezos',
      rank: '#10',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
  ];

  const data = React.useMemo(() => database, []);

  return (
    <Layout mainClassName="pt-4 pb-6">
      <div className="flex flex-col items-center space-y-6 md:space-y-6 md:flex-row md:justify-between">
        <div className="flex space-x-2 items-center">
          <div className="text-primary text-36 lg:text-48">Market Distribution</div>
        </div>
        <div className="bg-fadeBlack rounded-lg p-6">
          <div className="flex space-x-8">
            <div className="text-white">
              <div className="text-18">Daily Distribution</div>
              <div className="text-30 2xl:mt-4">17,290.58</div>
            </div>
            <div className="text-white">
              <div className="text-18">Remaining</div>
              <div className="text-30 2xl:mt-4">20,619,487.82</div>
            </div>
          </div>
          <Progress wrapperClassName="mt-4" />
        </div>
      </div>
      <Table columns={columns} data={data} />
    </Layout>
  );
}

export default Annex;
