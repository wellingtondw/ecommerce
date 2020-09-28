import React from "react";

function Title({ type, title, ...props }) {
  switch (type) {
    case "h1":
    default:
      return <h1 className="Title">{title}</h1>;
  }
}

export default Title;
