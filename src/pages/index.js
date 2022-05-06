import React, { useState, useRef } from 'react';

import {
  getDistinctApplicationTypes,
  getDistinctActiontypes,
  getFilteredData,
} from '../common/util';
import { getAuditLogs } from './api/auditLogService';

import HomePage from '../containers/Home';

function Home({ logs, totalRecords, listAppType, listAppId }) {
  /** states and constants initializations */
  const [filterData, setfilterData] = useState(logs.auditLog);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(
    Math.ceil(logs.auditLog.length / 10)
  );
  const fetchIdRef = useRef(0);
  const [boxstate, setboxstate] = useState({
    data: logs.auditLog,
    totalRecords: totalRecords,
  });

  /**
   * Child filter button event handler
   */
  const handledSearch = params => {
    if (
      params.apType != undefined ||
      params.acType != undefined ||
      params.apId != undefined ||
      params.fDate != undefined ||
      params.tDate != undefined
    ) {
      let filteredData = getFilteredData(logs, params);

      const pageSize = 10;
      const pageIndex = 0;
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;

      setboxstate({
        data: filteredData.slice(startRow, endRow),
        totalRecords: filteredData.length,
      });
      setPageCount(Math.ceil(filteredData.length / pageSize));

      setfilterData(filteredData);
    } else {
      const pageSize = 10;
      const pageIndex = 0;
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      setboxstate({
        ...boxstate,
        data: logs.auditLog.slice(startRow, endRow),
        totalRecords: totalRecords,
      });
      setPageCount(Math.ceil(logs.auditLog.length / pageSize));

      setfilterData(logs.auditLog);
    }
  };

  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
      const fetchId = ++fetchIdRef.current;
      setLoading(true);
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setboxstate({
          data: filterData.slice(startRow, endRow),
          totalRecords: filterData.length,
        });
        setLoading(false);
      }
    },
    [filterData]
  );
  /** */

  return (
    <HomePage
      listAppType={listAppType}
      listAppId={listAppId}
      handledSearch={handledSearch}
      boxstate={boxstate}
      loading={loading}
      pageCount={pageCount}
      fetchData={fetchData}
    />
  );
}

/**
 *
 */
export async function getServerSideProps() {
  const json = await getAuditLogs();

  return {
    props: {
      logs: json.result,
      totalRecords: json.result.auditLog.length,
      listAppType: getDistinctActiontypes(json.result.auditLog),
      listAppId: getDistinctApplicationTypes(json.result.auditLog),
    },
  };
}

export default Home;
