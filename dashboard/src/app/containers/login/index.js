import React, { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../../components/text/Title";
import Input from "../../components/inputs/DefaultInput";
import Checkbox from "../../components/inputs/Checkbox";
import Button from "../../components/button/DefaultButton";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remeberPassword: false,
  });

  const handleChangeInput = (evt, field) => {
    setFormData({ ...formData, [field]: evt.target.value });
  };

  const handleChangeCheckbox = (field) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  return (
    <div className="login">
      <div className="card">
        <Title type="h1" title="Loja IT" />
        <p>Faça seu login abaixo</p>

        <Input
          label="E-mail"
          value={formData.email}
          type="email"
          onChange={(evt) => handleChangeInput(evt, "email")}
        />

        <Input
          label="Senha"
          value={formData.password}
          type="password"
          onChange={(evt) => handleChangeInput(evt, "password")}
        />

        <div>
          <div>
            <Checkbox
              value={formData.remeberPassword}
              onChange={() => handleChangeCheckbox("remeberPassword")}
              label="lembrar"
            />
          </div>
          <div>
            <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
          </div>
        </div>

        <Button
          onClick={() => alert("Login")}
          type="success"
          route="/"
          label="Entrar"
        />
      </div>
    </div>
  );
}

export default Login;
