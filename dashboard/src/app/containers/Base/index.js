import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";

function Dashboard({ children, ...props }) {
  return (
    <div className="flex horizontal">
      <div className="flex vertical full-height">
        <Menu history={props.history} />
      </div>

      <div className="flex vertical full-width">
        <div className="flex horizontal">
          <TopBar />
        </div>
        <div className="flex full-height">{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
