import React from "react";

function DataText({ label, value }) {
  return (
    <div>
      <strong className="data-text">{label}: </strong>
      <span>{value}</span>
    </div>
  );
}

export { DataText };
