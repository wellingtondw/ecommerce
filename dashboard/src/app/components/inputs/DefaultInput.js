import React from "react";

function DefaultInput({ label, type, value, onChange }) {
  return (
    <div className="default-input">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default DefaultInput;
