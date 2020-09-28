import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { HashRouter as Router, Route } from "react-router-dom";

import Requests from "./containers/Requests";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Requests} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
