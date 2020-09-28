import React from "react";
import Base from "../Base";

function base(Component) {
  return (props) => (
    <Base history={props.history}>
      <Component {...props} />
    </Base>
  );
}

export default base;
