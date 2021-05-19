import React, { useState } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Starting from './Starting';
import AllProposals from './AllProposals';
import SelectedProposal from './SelectedProposal';
import ProposalDetail from './ProposalDetail';

function Vote() {
  const [step, setStep] = useState('starting');
  const [selectedProposal, setSelectedProposal] = useState('');

  return (
    <Layout mainClassName="">
      {step === 'starting' && <Starting onSetStep={() => setStep('allProposals')} />}
      {step === 'allProposals' && (
        <AllProposals
          onSelectProposal={(id) => {
            setSelectedProposal(id);
            setStep('selectedProposal');
          }}
        />
      )}
      {step === 'selectedProposal' && (
        <SelectedProposal
          displayProposalDetail={() => setStep('proposalDetail')}
          selectedProposal={selectedProposal}
        />
      )}
      {step === 'proposalDetail' && <ProposalDetail />}
    </Layout>
  );
}

export default Vote;
