import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './RouteMap';
import Demo from '../pages/Demo';
import Dashboard from '../pages/Dashboard';
import Annex from '../pages/Annex';
import Farms from '../pages/Farms';
import Market from '../pages/Market';
import Pools from '../pages/Pools';
import Trade from '../pages/Trade';
import Vault from '../pages/Vault';
import Vote from '../pages/Vote';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={routes.dashboard} />} />
      <Route exact path={routes.dashboard} component={Dashboard} />
      <Route exact path={routes.annex} component={Annex} />
      <Route exact path={routes.farms} component={Farms} />
      <Route exact path={routes.market} component={Market} />
      <Route exact path={routes.pools} component={Pools} />
      <Route exact path={routes.trade} component={Trade} />
      <Route exact path={routes.vault} component={Vault} />
      <Route exact path={routes.vote} component={Vote} />
      <Route exact path={routes.demo} component={Demo} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
