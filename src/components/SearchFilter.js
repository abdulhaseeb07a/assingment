import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQueryParams, StringParam } from 'next-query-params';

import TextSearch from './TextSearch';
import DateRangeSearch from './DateRangeSearch';
import DropDownSearch from './DropdownSearch';
import SubmitButton from './SubmitButton';

export default function SearchFilters({ listAppType, listAppId, onSearch }) {
  const [actionType, setactionType] = useState();
  const [applicationType, setapplicationType] = useState();
  const [applicationId, setapplicationId] = useState();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();

  const [query, setQuery] = useQueryParams({
    apType: StringParam,
    acType: StringParam,
    apId: StringParam,
    fDate: StringParam,
    tDate: StringParam,
  });

  const handledSearch = () => {
    setQuery({
      apType: applicationType === '' ? undefined : applicationType,
      acType: actionType === '' ? undefined : actionType,
      apId: applicationId === '' ? undefined : applicationId,
      fDate: fromDate === '' ? undefined : fromDate,
      tDate: toDate === '' ? undefined : toDate,
    });
  };

  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <div className="searchLogger full-view-width">
      <Form className='search-form-style'>
        <div className="form-row">
          <DropDownSearch
            id="actionType"
            label="Action type"
            onChange={e => {
              setactionType(e.target.value);
            }}
            optList={listAppType}
          />
          <DropDownSearch
            id="applicationType"
            label="Application type"
            onChange={e => {
              setapplicationType(e.target.value);
            }}
            optList={listAppId}
          />
          <DateRangeSearch
            fromId="fromDate"
            toId="toDate"
            fromLabel="From Date"
            toLabel="To Date"
            fromPlaceHolder="Select date"
            toPlaceHolder="Select date"
            fromOnChnage={e => {
              setfromDate(e.target.value);
            }}
            toOnChange={e => {
              settoDate(e.target.value);
            }}
          />
          <TextSearch
            id="applicationId"
            label="Application ID"
            placeholder="e.g.219841/2021"
            onChange={e => {
              setapplicationId(e.target.value);
            }}
          />
          <SubmitButton buttonText="Search Logger" onClick={handledSearch} />
        </div>
      </Form>
    </div>
  );
}
