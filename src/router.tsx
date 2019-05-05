import { Route, routerRedux, Switch } from "dva/router";
import React, { Suspense } from "react";
import BasicLayout from "./layouts/BasicLayout";

const { ConnectedRouter } = routerRedux;

export default function({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={BasicLayout} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}
