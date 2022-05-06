import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DropDownSearch({ id, label, onChange, optList }) {
  return (
    <div className="form-group col-md-2">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="form-control" onChange={onChange}>
        <option></option>
        {optList &&
          optList.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default DropDownSearch;
