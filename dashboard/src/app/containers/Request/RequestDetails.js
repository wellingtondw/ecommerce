import React from "react";

import Title from "../../components/text/Title";
import Button from "../../components/button/DefaultButton";
import { DataText } from "../../components/text/DataText";
import Table from "../../components/table/DefaultTable";

function RequestDetails() {
  const renderHeader = () => {
    return (
      <div>
        <div>
          <Title type="h2" title="Pedido - Cliente 1 - 04-04-2019" />
        </div>
        <div>
          <Button
            type="danger"
            label="Cancelar Pedido"
            onClick={() => alert("Cancelado")}
          />
        </div>
      </div>
    );
  };

  const renderClientData = () => {
    return (
      <div>
        <Title type="h4" title="Dados do Cliente" />
        <br />
        <DataText label="Nome" value="Cliente 1" />
        <DataText label="CPF" value="111.222.333.45" />
        <DataText label="Telefone" value="11 1234-5678" />
        <DataText label="Data de Nascimento" value="10/04/1990" />
      </div>
    );
  };

  const renderSendData = () => {
    return (
      <div>
        <Title type="h4" title="Dados do Entrega" />
        <br />
        <DataText label="Endereço" value="Rua teste, 123" />
        <DataText label="Bairro" value="centro" />
        <DataText label="Cidade" value="Rio de Janeiro" />
        <DataText label="Estado" value="Rio de Janeiro" />
        <DataText label="CEP" value="12345-123" />
      </div>
    );
  };

  const renderPaymentData = () => {
    return (
      <div>
        <Title type="h4" title="Dados do Pagamento" />
        <br />
        <DataText label="Taxa de Entrega" value="R$ 15,50 (PAC)" />
        <DataText label="Valor do Pedido" value="R$ 32,00" />
        <DataText label="Valor Total" value="R$ 47,50" />
        <DataText label="Forma de Pagamento" value="BOLETO" />
      </div>
    );
  };

  const renderCartData = () => {
    const data = [
      {
        Produto: "Produto 1",
        "Preço Und.": "R$ 10,00",
        Quantidade: "1",
        "Preço Total": "R$ 10,00",
      },
      {
        Produto: "Produto 2",
        "Preço Und.": "R$ 32,00",
        Quantidade: "2",
        "Preço Total": "R$ 64,00",
      },
    ];

    return (
      <div>
        <Title type="h4" title="Carrinho" />
        <br />
        <Table
          header={["Produto", "Preço Und.", "Quantidade", "Preço Total"]}
          data={data}
        />
      </div>
    );
  };

  return (
    <div className="request-details">
      {renderHeader()}
      {renderClientData()}
      {renderCartData()}
      {renderSendData()}
      {renderPaymentData()}
    </div>
  );
}

export default RequestDetails;
