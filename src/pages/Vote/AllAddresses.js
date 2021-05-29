import React, { useState } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';
import avatar from '../../assets/icons/avatar.svg';
import Table from './Table';
import FootNote from './FootNote';

function AllAddresses() {
  const [displayDetails, setDisplayDetails] = useState(false);

  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Rank',
          accessor: 'rank',
          disableFilters: true,
        },
        {
          Header: '',
          accessor: 'rankDesc',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-start items-center space-x-2">
                <div className="relative">
                  <img className="w-8" src={avatar} alt="bitcoin" />
                  <div className="w-2 h-2 rounded-full bg-green absolute bottom-0 right-0"></div>
                </div>
                <div className="text-white">0x046231a12d30248bad3322af74cea9c325627d32</div>
              </div>
            );
          },
        },
        {
          Header: 'Vote',
          accessor: 'vote',
        },
        {
          Header: 'Vote Weight',
          accessor: 'voteWeight',
          disableFilters: true,
        },
        {
          Header: 'Proposals Voted',
          accessor: 'proposalsVoted',
          disableFilters: true,
        },
      ],
    },
  ];

  const database = [
    {
      rank: '#1',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#2',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#3',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#4',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#5',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#6',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#7',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#8',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#9',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
    },
    {
      rank: '#10',
      rankDesc: '',
      vote: '4,098,292.1601',
      voteWeight: '49.95%',
      proposalsVoted: '3',
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
    <Layout title="LEADERBOARD" mainClassName="py-8">
      <Table columns={columns} data={data} onRowClick={() => setDisplayDetails(true)} />
      <FootNote />
    </Layout>
  );
}

export default AllAddresses;
