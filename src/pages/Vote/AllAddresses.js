import React from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import avatar from '../../assets/icons/avatar.svg';
import Table from './Table';

function AllAddresses() {
  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Rank',
          accessor: 'rank',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: ({ value }) => {
            return <div className="text-18 font-bold">{value}</div>;
          },
        },
        {
          Header: '',
          accessor: 'rankDesc',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: (props) => {
            return (
              <div className="flex justify-start items-center space-x-8">
                <div className="relative">
                  <img className="w-8" src={avatar} alt="avatar" />
                  <div className="w-2 h-2 rounded-full bg-green absolute bottom-0 right-0"></div>
                </div>
                <div className="text-white text-18">0x046231a12d30248bad3322af74cea9c325627d32</div>
              </div>
            );
          },
        },
        {
          Header: 'Vote',
          accessor: 'vote',
          // eslint-disable-next-line react/display-name
          Cell: ({ value }) => {
            return <div className="text-18">{value}</div>;
          },
        },
        {
          Header: 'Vote Weight',
          accessor: 'voteWeight',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: ({ value }) => {
            return <div className="text-18">{value}</div>;
          },
        },
        {
          Header: 'Proposals Voted',
          accessor: 'proposalsVoted',
          disableFilters: true,
          // eslint-disable-next-line react/display-name
          Cell: ({ value }) => {
            return <div className="text-18">{value}</div>;
          },
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

  return (
    <Layout title="LEADERBOARD" mainClassName="py-8">
      <Table columns={columns} data={data} />
    </Layout>
  );
}

export default AllAddresses;
