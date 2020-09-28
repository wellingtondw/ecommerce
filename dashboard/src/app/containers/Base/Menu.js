import React, { useState } from "react";

import ListItems from "./ListItems";

function Menu(props) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`menu ${open ? "menu-open" : ""}`}>
      <div
        className={`top-item flex ${open ? "flex-end" : "flex-center"}`}
        onClick={() => setOpen(!open)}
      >
        <i className={`fas fa-arrow-${open ? "left" : "right"}`} />
      </div>
      <hr />
      <ListItems open={open} history={props.history} />
    </div>
  );
}

export default Menu;
