import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './RouteMap';
import Dashboard from '../pages/Dashboard';
import Annex from '../pages/Annex';
import Farms from '../pages/Farms';
import Market from '../pages/Market';
import Pools from '../pages/Pools';
import Trade from '../pages/Trade';
import Vault from '../pages/Vault';
import VoteStarting from '../pages/Vote/Starting';
import VoteAllProposals from '../pages/Vote/AllProposals';
import VoteSelectedProposal from '../pages/Vote/SelectedProposal';
import VoteProposalDetail from '../pages/Vote/ProposalDetail';
import AllAddresses from '../pages/Vote/AllAddresses';
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
      <Route exact path={routes.vote.index} component={VoteStarting} />
      <Route exact path={routes.vote.allProposals} component={VoteAllProposals} />
      <Route exact path={routes.vote.allAddresses} component={AllAddresses} />
      <Route
        exact
        path={routes.vote.viewProposal(':proposalId')}
        component={VoteSelectedProposal}
      />
      <Route
        exact
        path={routes.vote.viewProposalDetails(':proposalId', ':addressId')}
        component={VoteProposalDetail}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
