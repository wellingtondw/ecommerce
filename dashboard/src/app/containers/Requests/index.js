import React, { useState } from "react";

import Title from "../../components/text/Title";

import Search from "../../components/inputs/Search";

function Requests(props) {
  const [search, setSearch] = useState("");

  return (
    <div className="Requests">
      <div className="card">
        <Title type="h1" title="Pedidos" />
        <br />
        <Search
          value={search}
          placeholder="Pesquise aqui pelo nome do cliente..."
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <Table />
        <Pagination />
      </div>
    </div>
  );
}

export default Requests;
