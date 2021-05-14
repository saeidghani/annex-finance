import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import TestTable from '../components/UI/TestTable';

function Market() {
  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
      ],
    },
  ];

  const database = [
    { name: 'aaa', age: 1 },
    { name: 'hhh', age: 9 },
    { name: 'ccc', age: 3 },
    { name: 'ddd', age: 4 },
  ];

  const getItem = (data) => ({
    name: (
      <div className="cursor-pointer h-6" onClick={() => {}}>
        {data.name}
      </div>
    ),
    age: (
      <div className="cursor-pointer" onClick={() => {}}>
        {data.age}
      </div>
    ),
  });

  const data = React.useMemo(
    () => [
      {
        name: (
          <div className="cursor-pointer h-6" onClick={() => {}}>
            aaa
          </div>
        ),
        age: (
          <div className="cursor-pointer" onClick={() => {}}>
            1
          </div>
        ),
      },
      {
        name: (
          <div className="cursor-pointer h-6" onClick={() => {}}>
            bbb
          </div>
        ),
        age: (
          <div className="cursor-pointer" onClick={() => {}}>
            2
          </div>
        ),
      },
      {
        name: (
          <div className="cursor-pointer h-6" onClick={() => {}}>
            ggg
          </div>
        ),
        age: (
          <div className="cursor-pointer" onClick={() => {}}>
            9
          </div>
        ),
      },
      {
        name: (
          <div className="cursor-pointer h-6" onClick={() => {}}>
            ccc
          </div>
        ),
        age: (
          <div className="cursor-pointer" onClick={() => {}}>
            3
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <Layout mainClassName="bg-white min-h-screen flex justify-center">
      <TestTable columns={columns} data={data} />
    </Layout>
  );
}

export default Market;
