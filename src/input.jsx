import React from "react";

const Input = props => {
  const { name, label, value, error, onChange } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="form-control"
        type="text"
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
