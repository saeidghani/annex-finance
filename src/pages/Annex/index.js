import React from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Table from './Table';
import Chart from './Chart';
import Progress from '../../components/UI/Progress';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';
import annexWhite from '../../assets/icons/annexWhite.svg';
import options from '../../assets/icons/options.svg';

function Annex() {
  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Rank',
          accessor: 'rank',
          width: 300,
          disableFilters: true,
        },
        {
          Header: 'Coin Market',
          accessor: 'coin',
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-start items-center space-x-2">
                <img src={bitcoinBlack} alt="bitcoin" />
                <div className="">{props.value}</div>
              </div>
            );
          },
        },
        {
          Header: 'Per Day',
          accessor: 'perDay',
          disableFilters: true,
          width: 300,
        },
        {
          Header: 'Supply',
          accessor: 'supply',
          disableFilters: true,
          width: 300,
        },
        {
          Header: 'Volume (24h)',
          accessor: 'volume',
          disableFilters: true,
          width: 300,
        },
        {
          Header: 'Borrow',
          accessor: 'borrow',
          disableFilters: true,
          width: 300,
          // eslint-disable-next-line react/display-name
          Cell: ({ row }) => {
            const redItems = ['0', '3', '6', '7', '8'];
            return (
              <div className="w-72 h-28 mx-auto">
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
        {
          Header: '',
          accessor: 'options',
          disableFilters: true,
          width: 10,
          // eslint-disable-next-line react/display-name
          Cell: () => (
            <div className="flex justify-center cursor-pointer">
              <img src={options} alt="" />
            </div>
          ),
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
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
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
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
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
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
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
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
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
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
    {
      coin: 'Bitcoin',
      rank: '#1',
      perDay: '$11,911.48',
      supply: '2,54%',
      volume: '$220,083,007,631',
      borrow: 'detail',
      options: '',
    },
  ];

  const data = React.useMemo(() => database, []);

  return (
    <Layout mainClassName="pt-4 pb-6" title="ANNEX">
      <div className="flex flex-col items-center space-y-6 md:space-y-6 md:flex-row md:justify-between">
        <div className="flex space-x-2 items-center">
          <img src={annexWhite} alt="" />
          <div className="text-primary 2xl:text-24">0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63</div>
        </div>
        <div className="bg-fadeBlack rounded-lg p-6">
          <div className="flex space-x-8">
            <div className="text-white">
              <div className="text-base 2xl:text-18">Daily Distribution</div>
              <div className="text-xl 2xl:text-30 2xl:mt-4">17,290.58</div>
            </div>
            <div className="text-white">
              <div className="text-base">Remaining</div>
              <div className="text-xl 2xl:text-30 2xl:mt-4">20,619,487.82</div>
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
