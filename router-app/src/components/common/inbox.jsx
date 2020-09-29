import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  const place = `Enter the ${label}`;
  return (
    <div className="form-group text-right row">
      <label
        htmlFor={name}
        className="col-sm-4 col-form-label col-form-label-sm"
      >
        {label}
        <span className="text-danger">*</span>
      </label>
      <div className="col-sm-5">
        <input
          {...rest}
          name={name}
          id={name}
          className="form-control form-control-sm"
          placeholder={place}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
