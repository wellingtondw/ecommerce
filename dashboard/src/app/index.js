import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "../css/index.css";

import { HashRouter as Router, Route } from "react-router-dom";

import base from "./containers/HOC/Base";
import Requests from "./containers/Requests";
import Request from "./containers/Request";

import Login from "./containers/login";
import PasswordRecovery from "./containers/password-recovery";
import PasswordReset from "./containers/password-recovery/PasswordReset";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={base(Requests)} />
          <Route path="/pedido" exact component={base(Request)} />

          <Route path="/login" exact component={Login} />
          <Route path="/recuperar-senha" exact component={PasswordRecovery} />
          <Route path="/resetar-senha/:token" exact component={PasswordReset} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
