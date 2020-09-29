import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, onClick, label }) => {
  return (
    <div className="button">
      <button
        onClick={onClick}
        className={`button button-${type || "default"}`}
      >
        {label}
      </button>
    </div>
  );
};

function DefaultButton({ type, route, onClick, label }) {
  if (route) {
    return (
      <Link to={route}>
        <Button type={type} onClick={onClick} label={label} />
      </Link>
    );
  }

  return <Button type={type} onClick={onClick} label={label} />;
}

export default DefaultButton;
