import React from "react";

function Search({ value, placeholder, onChange, onClick }) {
  return (
    <div className="search">
      <input value={value} onChange={onChange} placeholder={placeholder} />
      <button onClick={onClick}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
}

export default Search;
