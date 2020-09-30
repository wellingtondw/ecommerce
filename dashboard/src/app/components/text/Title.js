import React from "react";

function Title({ type, title, ...props }) {
  switch (type) {
    case "h4":
      return <h4 className="subtitle">{title}</h4>;
    case "h2":
      return <h2 className="secondary-title">{title}</h2>;
    case "h1":
    default:
      return <h1 className="primary-title">{title}</h1>;
  }
}

export default Title;
