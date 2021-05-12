import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

const Styles = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    background-color: #000;
    color: #fff;
    border-spacing: 0;
    border: 1px solid #2b2b2b;

    tr {
      border-bottom: 1px solid #2b2b2b;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem 2rem;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data, onRowClick }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {[headerGroups[1]].map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <td {...cell.getCellProps()}>
                    <div className="text-center">{cell.render('Cell')}</div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App({ columns, data, onRowClick }) {
  const defaultColumns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
    ],
    [],
  );

  return (
    <Styles>
      <Table columns={columns} data={data} onRowClick={onRowClick} />
    </Styles>
  );
}

export default App;
