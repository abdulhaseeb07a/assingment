import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextSearch({ id, label, placeholder, onChange }) {
  return (
    <div className="form-group col-md-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
