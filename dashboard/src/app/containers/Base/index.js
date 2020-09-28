import React from "react";

function Dashboard({ children, ...props }) {
  return (
    <div className="flex horizontal">
      <div className="flex vertical">
        <p>Menu</p>
      </div>

      <div className="flex vertical">
        <div className="flex horizontal">Barra topo</div>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
