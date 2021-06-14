import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layouts/MainLayout/MainLayout';
import Progress from '../../components/UI/Progress';
import ChooseDelegationModal from './ChooseDelegationModal';
import CreatePostModal from './CreatePostModal';
import ExecuteTransactionModal from './ExecuteTransactionModal';
import DelegateVotingModal from './DelegateVotingModal';
import ActionsModal from './ActionsModal';
import RouteMap from '../../routes/RouteMap';

export default function Starting({ onSetStep }) {
  const [chooseDelegationOpen, setChooseDelegationOpen] = useState(false);
  const [executeTransactionOpen, setExecuteTransactionOpen] = useState(false);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [delegateVotingOpen, setDelegateVotingOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);

  const history = useHistory();

  const ProgressDetails = ({ title, percent, size }) => (
    <div className="p-3 border border-solid border-lightGray w-full">
      <div className="flex justify-between">
        <div className={`text-white ${size === 'sm' ? 'text-18' : 'text-24'}`}>{title}</div>
        <div className={`text-primary ${size === 'sm' ? 'text-18' : 'text-24'}`}>{percent}%</div>
      </div>
      <Progress wrapperClassName="w-full mt-2" percent={percent} />
    </div>
  );

  return (
    <Layout>
      <ChooseDelegationModal
        open={chooseDelegationOpen}
        onSetOpen={() => setChooseDelegationOpen(true)}
        onCloseModal={() => setChooseDelegationOpen(false)}
        openCreatePostModal={() => {
          setChooseDelegationOpen(false);
          setCreatePostOpen(true);
        }}
      />
      <CreatePostModal
        open={createPostOpen}
        onSetOpen={() => setCreatePostOpen(true)}
        onCloseModal={() => setCreatePostOpen(false)}
      />
      <ExecuteTransactionModal
        open={executeTransactionOpen}
        onSetOpen={() => setExecuteTransactionOpen(true)}
        onCloseModal={() => setExecuteTransactionOpen(false)}
        onDelegateVotingOpen={() => {
          setExecuteTransactionOpen(false);
          setDelegateVotingOpen(true);
        }}
      />
      <DelegateVotingModal
        open={delegateVotingOpen}
        onSetOpen={() => setDelegateVotingOpen(true)}
        onCloseModal={() => setDelegateVotingOpen(false)}
      />
      <ActionsModal
        open={actionsOpen}
        onSetOpen={() => setActionsOpen(true)}
        onCloseModal={() => setActionsOpen(false)}
      />
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-8 lg:gap-x-6 mt-8">
        <div className="col-span-3 bg-fadeBlack p-1 rounded-3xl">
          <div className="text-white text-24 font-bold p-5 pt-6">Voting Wallet</div>
          <div className="border-t border-solid border-lightGray p-6">
            <div className="text-gray text-24">COMP Balance</div>
            <div className="text-red text-24">0.00000000</div>
          </div>
          <div className="border-t border-solid border-lightGray p-6">
            <div className="text-white text-24 font-bold mt-3">Setup Voting</div>
            <div className="text-white text-18 mt-4">
              You can either vote on each proposal yourself or delegate your votes to a third party.
              Venus Governance puts you in charge of the future of Venus.
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="focus:outline-none bg-primary text-black py-3 px-25 rounded text-24"
                onClick={() => setChooseDelegationOpen(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-fadeBlack p-1 rounded-3xl">
          <div className="text-white text-24 font-bold p-6">Active Proposals</div>
          <div className="border-t border-solid border-lightGray p-6">
            <div className="text-white text-24">Governance Analysis Period</div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-6 mt-4">
                <button
                  className="focus:outline-none text-green px-2 rounded text-14
                                 border border-solid border-green"
                >
                  Passed
                </button>
                <div className="text-gray text-14">025 - Queued April 12th, 2021</div>
              </div>
              <div className="flex space-x-4">
                <button
                  className="focus:outline-none bg-primary text-black px-5 py-0.5 rounded text-24"
                  onClick={() => setActionsOpen(true)}
                >
                  Actions
                </button>
                <button
                  className="focus:outline-none bg-primary text-black px-5 py-0.5 rounded text-24"
                  onClick={() => setExecuteTransactionOpen(true)}
                >
                  Execute
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mt-4">
              <ProgressDetails title="For" percent={100} />
              <ProgressDetails title="Against" percent={80} size="sm" />
              <ProgressDetails title="Abstain" percent={65} size="sm" />
            </div>
          </div>
          <div className="border-t border-solid border-lightGray p-6 mt-9">
            <div className="flex justify-center mt-4">
              <button
                className="focus:outline-none bg-primary text-black py-3 px-22 rounded text-24"
                onClick={() => history.push(RouteMap.vote.allProposals)}
              >
                All Proposals
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
