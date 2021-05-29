import React, { useState } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Starting from './Starting';
import AllProposals from './AllProposals';
import SelectedProposal from './SelectedProposal';
import ProposalDetail from './ProposalDetail';

function Vote() {
  return (
    <Layout>
      <Starting />
    </Layout>
  );
}

export default Vote;
