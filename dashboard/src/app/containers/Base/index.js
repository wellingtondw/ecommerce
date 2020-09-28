import React from "react";

const TopBar = () => {
  return (
    <div className="flex horizontal full-width">
      <div className="flex-1 flex flex-start">
        <p>Ver Loja</p>
      </div>
      <div className="flex-1 flex flex-end">
        <p>Sair</p>
      </div>
    </div>
  );
};

function Dashboard({ children, ...props }) {
  return (
    <div className="flex horizontal">
      <div className="flex vertical full-height">
        <p>Menu</p>
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
