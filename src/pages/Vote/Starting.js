import React, { useState } from 'react';
import Progress from '../../components/UI/Progress';
import ChooseDelegationModal from './ChooseDelegationModal';
import CreatePostModal from './CreatePostModal';
import FootNote from './FootNote';

export default function Starting({ onSetStep }) {
  const [chooseDelegationOpen, setChooseDelegationOpen] = useState(false);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [newPost, setNewPost] = useState({});

  const ProgressDetails = ({ title, percent }) => (
    <div className="p-3 border border-solid border-lightGray w-full">
      <div className="flex justify-between">
        <div className="text-white">{title}</div>
        <div className="text-primary">{percent}%</div>
      </div>
      <Progress wrapperClassName="w-full mt-2" percent={percent} />
    </div>
  );

  const newPostItems = [
    { key: 1, name: 'Address' },
    { key: 2, name: 'ownership' },
  ];

  return (
    <div>
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
        onCloseModal={() => {
          setNewPost({});
          setCreatePostOpen(false);
        }}
        values={newPost}
        onSetValues={(e) => setNewPost({ ...newPost, [e.target.name]: e.target.value })}
        items={newPostItems}
      />
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-8 lg:gap-x-6 mt-8">
        <div className="col-span-3 bg-fadeBlack p-1 rounded-3xl">
          <div className="text-white text-28 p-5 pt-6">Voting Wallet</div>
          <div className="border-t border-solid border-lightGray p-6">
            <div className="text-gray">COMP Balance</div>
            <div className="text-red">0.00000000</div>
          </div>
          <div className="border-t border-solid border-lightGray p-6">
            <div className="text-white text-24 mt-3">Setup Voting</div>
            <div className="text-white text-18 mt-4">
              You can either vote on each proposal yourself or delegate your votes to a third party.
              Venus Governance puts you in charge of the future of Venus.
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="focus:outline-none bg-primary text-black py-2 px-10 rounded text-base"
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
                  className="focus:outline-none text-green px-2 rounded text-xs
                                 border border-solid border-green"
                >
                  Passed
                </button>
                <div className="text-gray">025 - Queued April 12th, 2021</div>
              </div>
              <button className="focus:outline-none bg-primary text-black py-2 px-6 rounded text-base">
                Execute
              </button>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mt-4">
              <ProgressDetails title="For" percent={100} />
              <ProgressDetails title="Against" percent={80} />
              <ProgressDetails title="Abstain" percent={65} />
            </div>
          </div>
          <div className="border-t border-solid border-lightGray p-6 mt-9">
            <div className="flex justify-center mt-4">
              <button
                className="focus:outline-none bg-primary text-black py-2 px-10 rounded text-base"
                onClick={onSetStep}
              >
                All Proposals
              </button>
            </div>
          </div>
        </div>
      </div>
      <FootNote />
    </div>
  );
}
