import React from "react";

function DefaultPagination({ currentValue, limit, totalItems, onClick }) {
  const pageNumbers = Math.ceil(totalItems / limit);

  return (
    <div className="default-pagination flex horizontal">
      {[...Array(pageNumbers).keys()].map((pageNumber, idx) => {
        const currentPageNumber = pageNumber * limit;

        return (
          <div
            key={idx}
            className={`item-pagination ${
              currentPageNumber === currentValue ? "item-pagination-active" : ""
            }`}
            onClick={() => onClick(currentPageNumber)}
          >
            {pageNumber + 1}
          </div>
        );
      })}
    </div>
  );
}

export default DefaultPagination;
