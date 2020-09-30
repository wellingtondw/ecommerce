import React, { useState } from "react";
import moment from "moment";

import Title from "../../components/text/Title";

import Search from "../../components/inputs/Search";
import Table from "../../components/table/DefaultTable";
import Pagination from "../../components/pagination/DefaultPagination";

function Requests(props) {
  const [search, setSearch] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [data, setData] = useState([
    {
      Cliente: "Cliente 1",
      "Valor Total": 89.9,
      Data: moment().toISOString(),
      Situação: "Aguardando Pagamento",
      detailsLink: "/pedido/1837dfh21712",
    },
    {
      Cliente: "Cliente 2",
      "Valor Total": 105.9,
      Data: moment().toISOString(),
      Situação: "Aguardando Pagamento",
      detailsLink: "/pedido/1341df1df11234",
    },
    {
      Cliente: "Cliente 3",
      "Valor Total": 27.64,
      Data: moment().toISOString(),
      Situação: "Pagamento Concluído",
      detailsLink: "/pedido/asdfawdf12345345",
    },
  ]);

  const onChangeCurrentPageNumber = (current) => {
    setCurrentPageNumber(current);
  };

  return (
    <div className="requests full-width">
      <div className="card">
        <Title type="h1" title="Pedidos" />
        <br />
        <Search
          value={search}
          placeholder="Pesquise aqui pelo nome do cliente..."
          onChange={(evt) => setSearch(evt.target.value)}
          onClick={() => alert("Pesquisar")}
        />
        <Table
          header={["Cliente", "Valor Total", "Data", "Situação"]}
          data={data}
        />
        <Pagination
          currentValue={currentPageNumber}
          totalItems={120}
          limit={20}
          onClick={(current) => onChangeCurrentPageNumber(current)}
        />
      </div>
    </div>
  );
}

export default Requests;
