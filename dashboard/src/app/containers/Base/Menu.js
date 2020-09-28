import React, { useState } from "react";

import ListItems from "./ListItems";

function Menu(props) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="top-item">
        <i className="fas fa-arrow-left" />
      </div>
      <hr />
      <ListItems open={open} history={props.history} />
    </div>
  );
}

export default Menu;
