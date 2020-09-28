import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex horizontal full-width">
      <div className="flex-1 flex flex-start">
        <Link to="/">Ver Loja</Link>
      </div>
      <div className="flex-1 flex flex-end">
        <p>Sair</p>
      </div>
    </div>
  );
};

export default TopBar;
