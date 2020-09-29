import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    route: "/",
    icon: <i className="fas fa-copy" />,
    title: "Pedidos",
  },
  {
    route: "/clientes",
    icon: <i className="fas fa-users" />,
    title: "Clientes",
  },
  {
    route: "/categorias",
    icon: <i className="fas fa-clone" />,
    title: "Categorias",
  },
  {
    route: "/produtos",
    icon: <i className="fas fa-boxes" />,
    title: "Produtos",
  },
  {
    route: "/configuracoes",
    icon: <i className="fas fa-cog" />,
    title: "Configurações",
  },
  {
    route: "/perfil",
    icon: <i className="fas fa-user" />,
    title: "Perfil",
  },
];

function ListItems({ open, history }) {
  const location = history.location.pathname;

  return (
    <div className="items-wrapper">
      {items.map((item, idx) => (
        <Link to={item.route} key={idx}>
          <div
            className={`menu-item ${
              location === item.route ? "menu-item-active" : ""
            } flex horizontal`}
          >
            <div className="flex-1 flex flex-center">{item.icon}</div>
            {open && (
              <div className="flex-2 flex flex-start">
                <span>{item.title}</span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListItems;
