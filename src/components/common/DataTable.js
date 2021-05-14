import React from 'react';
import Table from '../UI/Table';

export default function DataTable({ title, columns, data }) {
  return (
    <div className="bg-fadeBlack p-6 w-full">
      {title && <div className="text-white text-2xl w-full mb-4">{title}</div>}
      <Table columns={columns} data={data} />
    </div>
  );
}
