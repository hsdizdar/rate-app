import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListPage from "./pages/ListPage";
import AddLinkPage from "./pages/AddLinkPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ListPage />
          </Route>

          <Route path="/pages/AddLinkPage" exact>
            <AddLinkPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
