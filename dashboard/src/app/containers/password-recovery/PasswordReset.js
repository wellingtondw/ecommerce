import React, { useState } from "react";

import Title from "../../components/text/Title";
import Input from "../../components/inputs/DefaultInput";
import Button from "../../components/button/DefaultButton";

function PasswordReset() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChangeInput = (evt, field) => {
    setFormData({ ...formData, [field]: evt.target.value });
  };
  return (
    <div className="password-reset">
      <Title type="h1" title="Loja IT" />
      <br />
      <div>
        <p>
          Para resetar a senha, digite a nova senha e confirme no campo abaixo.
        </p>
      </div>
      <br />
      <div>
        <Input
          label="Senha"
          value={formData.password}
          onChange={(evt) => handleChangeInput(evt, "password")}
        />
        <Input
          label="Confirmar Senha"
          value={formData.confirmPassword}
          onChange={(evt) => handleChangeInput(evt, "confirmPassword")}
        />
      </div>
      <div>
        <Button type="success" route="/login" label="Resetar Senha" />
      </div>
    </div>
  );
}

export default PasswordReset;
