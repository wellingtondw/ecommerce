import React, { useState } from "react";

import Title from "../../components/text/Title";
import Input from "../../components/inputs/DefaultInput";
import Button from "../../components/button/DefaultButton";

function PasswordRecovery() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChangeInput = (evt, field) => {
    setFormData({ ...formData, [field]: evt.target.value });
  };

  return (
    <div className="password-recovery">
      <Title type="h1" title="Loja IT" />
      <br />
      <div>
        <p>Para reiniciar sua senha, digite seu e-mail abaixo.</p>
        <p>Iremos enviar um link para você acessar e entrar uma nova senha.</p>
      </div>
      <div>
        <Input
          label="E-mail"
          value={formData.email}
          onChange={(evt) => handleChangeInput(evt, "email")}
        />
      </div>
      <br />
      <div>
        <Button
          type="success"
          route="/resetar-senha/1"
          label="Recuperar Senha"
        />
      </div>
    </div>
  );
}

export default PasswordRecovery;
