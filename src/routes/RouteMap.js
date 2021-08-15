export default {
  dashboard: '/dashboard',
  annex: '/annex',
  farms: '/farms',
  market: '/market',
  pools: '/pools',
  trade: '/trade',
  vault: '/vault',
  vote: {
    index: '/vote',
    allProposals: '/vote/all-proposals',
    viewProposal: (proposalId) => `/vote/all-proposals/${proposalId}`,
    viewProposalDetails: (proposalId, addressId) =>
      `/vote/all-proposals/${proposalId}/address/${addressId}`,
    allAddresses: '/vote/all-addresses',
  },
  demo: '/demo',
};
