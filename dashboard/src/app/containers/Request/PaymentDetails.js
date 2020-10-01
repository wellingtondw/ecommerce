import React, { useState } from "react";

import Title from "../../components/text/Title";
import DinamicList from "../../components/lists/DefaultDinamicList";

function PaymentDetails() {
  const [status, setStatus] = useState([
    "Aguardando Pagamento",
    "Processando Pagamento",
    "Concluindo Pagamento",
  ]);

  const handleRemove = (index) => {
    const newStatusData = status.filter((item, idx) => index !== idx);

    setStatus(newStatusData);
  };

  const handleAdd = (str) => {
    if (!str) return;

    setStatus([...status, str]);
  };

  return (
    <div className="payment-details">
      <Title type="h4" title="Pagamento" />
      <br />
      <DinamicList
        data={status}
        handleRemove={handleRemove}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default PaymentDetails;
