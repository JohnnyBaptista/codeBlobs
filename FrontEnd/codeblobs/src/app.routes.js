import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Groups from './views/Groups/Groups';
import GroupsTable from './views/Groups/GroupsTable';

const AppRoute = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Groups} />
        <Route exact path="/group" component={GroupsTable} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
