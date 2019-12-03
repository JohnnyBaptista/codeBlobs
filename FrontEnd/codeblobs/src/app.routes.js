import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Groups from './views/Groups/Groups';
import GroupsTable from './views/Groups/GroupsTable';
import GroupForm from "./views/Groups/GroupForm";
import TypesForms from "./views/Types/TypesForms";
import MemberForms from "./views/Members/MemberForms";

const AppRoute = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Groups} />
        <Route exact path="/group/:group_id" component={GroupsTable} />
        <Route exact path="/insert/group" component={GroupForm} />
        <Route exact path="/insert/type" component={TypesForms} />
        <Route exact path="/insert/member/:group_id" component={MemberForms} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
