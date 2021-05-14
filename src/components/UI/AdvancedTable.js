import React from 'react';
import styled from 'styled-components';
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table';
import { matchSorter } from 'match-sorter';
import sortUp from '../../assets/icons/sortUp.svg';
import sortDown from '../../assets/icons/sortDown.svg';
import Select from './Select';

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
      padding: 0.5rem 2rem 0.5rem 0;
      text-align: center;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
  const count = preFilteredRows.length;

  return (
    <input
      className="border border-solid border-gray bg-transparent
                           rounded-md mt-1 w-full focus:outline-none font-bold px-3 py-3.5 text-white"
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder="Search"
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data, tdClassName }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    [],
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageOptions,
    pageCount,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageIndex: 0 },
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination,
  );
  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10);

  const sortOptions = [
    { name: 'Hot' },
    { name: 'APR' },
    { name: 'Multiplier' },
    { name: 'Earned' },
    { name: 'Liquidity' },
  ];

  // Render the UI for your table
  return (
    <div className="relative">
      <div className="absolute -top-18 right-60 pr-4">
        <Select type="basic" options={sortOptions} />
      </div>
      <div className="bg-fadeBlack p-6 mt-18">
        <table {...getTableProps()}>
          <thead>
            {[headerGroups[1]].map((headerGroup) => (
              // eslint-disable-next-line react/jsx-key
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <img
                              className="inline relative left-1"
                              src={sortDown}
                              alt="sort down"
                            />
                          ) : (
                            <img className="inline relative left-1" src={sortUp} alt="sort up" />
                          )
                        ) : (
                          <div className="inline inline-flex flex-col space-y-0.5 relative bottom-1 left-1">
                            <img className="inline w-2.5" src={sortUp} alt="sort up" />
                            <img className="inline w-2.5" src={sortDown} alt="sort down" />
                          </div>
                        )}
                      </span>
                      <div className="absolute -top-18 right-0">
                        {column.canFilter ? column.render('Filter') : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <td {...cell.getCellProps()}>
                        <div className={cell.value === 'detail' ? 'text-primary' : ''}>
                          {cell.render('Cell')}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <div className="flex justify-between">
          <div className="text-white">
            Showing {page?.length} from {data.length} data
          </div>
          <div>
            <div className="flex space-x-6">
              <button
                className="text-white focus:outline-none"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>
              <div className="flex space-x-2 text-white">
                {[
                  pageIndex - 2,
                  pageIndex - 1,
                  pageIndex,
                  pageIndex + 1,
                  pageIndex + 2,
                  pageIndex + 3,
                ].map(
                  (p, i) =>
                    p <= pageCount &&
                    p >= 1 && (
                      <div
                        key={p}
                        className={`cursor-pointer text-lg ${
                          p === pageIndex + 1 ? 'text-primary' : ''
                        }`}
                        onClick={() => {
                          const page = Number(p) - 1;
                          gotoPage(page);
                        }}
                      >
                        {p}
                      </div>
                    ),
                )}
              </div>
              <button
                className="text-primary focus:outline-none"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ columns, data, tdClassName }) {
  return (
    <Styles>
      <Table columns={columns} data={data} tdClassName={tdClassName} />
    </Styles>
  );
}

export default App;
