import React from "react";

function Search({ value, placeholder, onChange }) {
  return (
    <div className="search">
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default Search;
