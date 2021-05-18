/* eslint-disable */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
  useExpanded,
} from 'react-table';
import { matchSorter } from 'match-sorter';
import sortUp from '../../assets/icons/sortUp.svg';
import sortDown from '../../assets/icons/sortDown.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import search from '../../assets/icons/search.svg';
import calendar from '../../assets/icons/calendar.svg';
import Select from '../../components/UI/Select';

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

    th {
      padding: 1rem !important;
    }

    td {
      padding: 0.8rem 2rem 0.8rem 0;
    }

    th,
    td {
      margin: 0;
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
    <div className="relative">
      <input
        className="border border-solid border-gray bg-transparent
                           rounded-3xl mt-1 w-full focus:outline-none font-bold px-3 py-2 text-white"
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder="Search"
      />
      <img className="w-4 absolute top-4 right-6" src={search} alt="search" />
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data, onRowClick }) {
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
    visibleColumns,
    pageCount,
    page,
    state: { pageIndex, pageSize, expanded },
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
    useExpanded,
    usePagination,
  );
  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10);

  const filterPeriodOptions = [
    { name: '4 June 2020 - 4 July 2020', logo: <img src={calendar} alt="" /> },
    { name: '4 June 2020 - 4 July 2020', logo: <img src={calendar} alt="" /> },
    { name: '4 June 2020 - 4 July 2020', logo: <img src={calendar} alt="" /> },
    { name: '4 June 2020 - 4 July 2020', logo: <img src={calendar} alt="" /> },
    { name: '4 June 2020 - 4 July 2020', logo: <img src={calendar} alt="" /> },
  ];

  // Render the UI for your table
  return (
    <div className="relative w-full">
      <div className="bg-fadeBlack w-full p-6 mt-16">
        <table {...getTableProps()} className="">
          <thead>
            {[headerGroups[1]].map((headerGroup) => (
              // eslint-disable-next-line react/jsx-key
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.Header}
                    >
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
                <Fragment key={i}>
                  <tr {...row.getRowProps()} onClick={onRowClick} className="cursor-pointer">
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td {...cell.getCellProps()} className="">
                          <div
                            className={
                              cell.column.Header === 'Rank'
                                ? 'text-midBlue'
                                : cell.column.Header === 'Supply'
                                ? 'text-green'
                                : ''
                            }
                          >
                            {cell.render('Cell')}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
        <br />
        <div className="flex justify-between">
          <div className="w-full">
            <div className="flex justify-between space-x-6 w-full px-6">
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
                <div className="flex space-x-2">
                  <div className="">Next</div>
                  <img src={rightArrow} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ columns, data, tdClassName, onRowClick }) {
  return (
    <Styles>
      <Table columns={columns} data={data} tdClassName={tdClassName} onRowClick={onRowClick} />
    </Styles>
  );
}

export default App;
