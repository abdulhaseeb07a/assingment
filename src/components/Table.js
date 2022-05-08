import { useMemo, useEffect } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

import { tableColumns } from '../common/constants';
import Pagination from './Pagination';

function Table({
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  totalCount,
}) {
  const columns = useMemo(() => tableColumns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      autoResetPage: false,
      pageCount: controlledPageCount,
    },
    useSortBy,
    usePagination
  );

  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => {
    fetchData && fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  useEffect(() => {
    gotoPage(0);
  }, [gotoPage, pageCount]);

  // Render the UI for your table
  return (
    <div className="App">
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map((headerGroup ,i) => (
            <tr {...headerGroup.getHeaderGroupProps()} scope="col" key={i}>
              {headerGroup.headers.map((column ,j) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={j}>
                  {column.render('Header')}
                  <span key={j}>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ↓'
                        : ' ↑'
                      : ' ⇅'}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} scope="row" key={i}>
                {row.cells.map((cell ,j) => {
                  return (
                    <td {...cell.getCellProps()} key={j}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan="10000">Loading...</td>
            ) : (
              <td colSpan="10000">
                {/* Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                  results */}
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <Pagination
        currentPage={pageIndex}
        totalCount={totalCount}
        pageSize={10}
        onPageChange={gotoPage}
      />
    </div>
  );
}

export default Table;
