import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SubmitButton({ buttonText, onClick }) {
  return (
    <div className="form-group col-md-2">
      <button
        type="button"
        className="btn btn-primary btn-style-fix"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default SubmitButton;
