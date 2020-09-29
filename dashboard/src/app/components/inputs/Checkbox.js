import React from "react";

function Checkbox({ label, value, onChange }) {
  return (
    <div className="checkbox">
      <input type="checkbox" checked={value} onChange={onChange} />
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;
