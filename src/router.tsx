import { Route, routerRedux, Switch } from "dva/router";
import * as React from "react";
import BasicLayout from "./layouts/BasicLayout";

const { ConnectedRouter } = routerRedux;

export default function({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
      </Switch>
    </ConnectedRouter>
  );
}
