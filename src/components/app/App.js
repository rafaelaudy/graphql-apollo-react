import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../layout/Header";
import LinkList from "../link/LinkList";
import CreateLink from "../link/CreateLink";
import Login from "../auth/Login";

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
