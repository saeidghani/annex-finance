/* eslint-disable */
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
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
import arrowBasic from '../../assets/icons/arrowBasic.svg';

const Styles = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 20px;
  margin-top: 25px;
  background-color: #101016;
  table {
    background-color: #000;
    color: #fff;
    border-spacing: 0;
    border: 1px solid #2b2b2b;
    margin-right: 80px;
    width: 800px;
    @media (min-width: 850px) {
      width: 100%;
    }

    tr {
      border-bottom: 1px solid #2b2b2b;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      font-size: 1.12rem;
      font-weight: 500;
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
    <div className="relative">
      <input
        className="border border-solid border-gray bg-transparent
                           rounded-4xl mt-1 w-96 lg:w-126 focus:outline-none font-bold px-3 pt-2 text-white"
        style={{ height: 60 }}
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder="Search here"
      />
      <img src={search} alt="" className="w-5 absolute top-8 right-8" />
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data, renderRowSubComponent }) {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));

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

  // Render the UI for your table
  return (
    <div className="w-full">
      <div className="relative w-full p-6 mt-4">
        <div className="absolute top-4 -right-100 md:right-0 pr-0 sm:pr-4">
          <div className="relative">
            <DatePicker
              className="custom-datepicker"
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
            <div
              className="absolute left-16 pointer-events-none"
              style={{ fontSize: 12, top: 28.5 }}
            >
              {moment(startDate).format('d/MM/yyyy')}
              <div className="absolute" style={{ top: 2, left: 60 }}>
                -
              </div>
            </div>
            <div
              className="absolute left-34 pointer-events-none"
              style={{ fontSize: 12, top: 28.5 }}
            >
              {moment(endDate).format('d/MM/yyyy')}
            </div>
            <div className="absolute top-1 left-16 pointer-events-none text-18 font-bold">
              Filter Periode
            </div>
            <img
              className="absolute top-5 left-6 pointer-events-none"
              src={calendar}
              alt="calendar"
            />
            <img
              className="absolute top-7 right-6 pointer-events-none"
              src={arrowBasic}
              alt="arrow"
            />
          </div>
        </div>
        <table {...getTableProps()} className="mt-32 sm:mt-20">
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
                      {index !== 6 && (
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
                      )}
                      <div className="absolute top-3 left-8 sm:left-6">
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
                <Fragment key={i}>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td {...cell.getCellProps()} className="">
                          <div
                            className={
                              cell.column.Header === 'Rank'
                                ? ''
                                : cell.column.Header === 'Supply'
                                ? ''
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
                  <div className="text-18">Next</div>
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

function App({ columns, data, tdClassName, subComponent }) {
  const renderRowSubComponent = React.useCallback(({ row }) => subComponent);

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        tdClassName={tdClassName}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
}

export default App;
