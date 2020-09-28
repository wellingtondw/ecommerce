import React from "react";

import Title from "../../components/text/Title";

function Requests(props) {
  console.log("props", props);

  return (
    <div className="Requests">
      <Title type="h1" title="Pedidos" />
    </div>
  );
}

export default Requests;
