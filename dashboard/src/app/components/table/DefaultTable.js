import React from "react";
import { Link } from "react-router-dom";

function DefaultTable({ header, data }) {
  return (
    <div className="default-table">
      <table className="default">
        <thead>
          <tr>
            {header.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {Object.keys(header).map((item, index) => (
                <td key={index}>{row[item] || ""}</td>
              ))}
              {row["detailsLink"] && (
                <td>
                  <Link to={"detailsLink"}>
                    <button>Detalhes</button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DefaultTable;
