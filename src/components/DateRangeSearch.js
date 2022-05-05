import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DateRangeSearch({
  fromId,
  toId,
  fromLabel,
  toLabel,
  fromPlaceHolder,
  toPlaceHolder,
  fromOnChnage,
  toOnChange,
}) {
  return (
    <>
      <div className="form-group col-md-2">
        <label htmlFor={fromId}>{fromLabel}</label>
        <input
          type="date"
          className="form-control"
          id={fromId}
          placeholder={fromPlaceHolder}
          onChange={fromOnChnage}
        />
      </div>
      <div className="form-group col-md-2">
        <label htmlFor={toId}>{toLabel}</label>
        <input
          type="date"
          className="form-control"
          id={toId}
          placeholder={toPlaceHolder}
          onChange={toOnChange}
        />
      </div>
    </>
  );
}

export default DateRangeSearch;
