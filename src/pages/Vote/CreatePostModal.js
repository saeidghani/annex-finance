import React, { useState } from 'react';
import crossPrimary from '../../assets/icons/crossPrimary.svg';
import plusCircle from '../../assets/icons/plusCircle.svg';
import edit from '../../assets/icons/edit.svg';
import closeCirclePrimary from '../../assets/icons/closeCirclePrimary.svg';
import Modal from '../../components/UI/Modal';

function CreatePostModal({ open, onSetOpen, onCloseModal }) {
  const [addAction, setAddAction] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [editingActions, setEditingActions] = useState([]);
  const [editAction, setEditAction] = useState({});
  const [newAction, setNewAction] = useState({});

  const title = (
    <div className="mx-10">
      <div
        className="grid grid-cols-5 items-center w-full mt-10 pb-8
                    border-b border-solid border-lightGray"
      >
        <div
          className="col-start-1 col-span-4 md:col-start-3 col-span-3 self-items-start
         md:self-items-center text-36 font-bold"
        >
          Create Proposal
        </div>
        <div
          className="col-start-5 justify-self-end cursor-pointer"
          onClick={() => {
            setNewPost({});
            setNewAction({});
            setEditingActions((prevState) => []);
            setAddAction(false);
            onCloseModal();
          }}
        >
          <img className="" src={crossPrimary} alt="close" />
        </div>
      </div>
    </div>
  );

  const content = (
    <div className="pt-14 pb-8 px-4 overflow-auto">
      <div className="mx-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
        <div className="w-full">
          <div className="text-24 border-b border-solid border-lightGray pb-8">
            Proposal Description
          </div>
          <div className="mt-6">
            <div className="text-24">Title</div>
            <input
              name="title"
              type="text"
              className="border border-solid border-primary bg-black
                           rounded-xl w-full focus:outline-none font-bold py-3 sm:pl-4
                            pr-4 text-white mt-2 mb-4"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, [e.target.name]: e.target.value })}
              placeholder="Add a New aToken!"
            />
          </div>
          <div className="mt-4">
            <div className="text-24">Overview</div>
            <textarea
              name="overview"
              type="text"
              rows={6}
              className="border border-solid border-primary bg-black
                           rounded-xl w-full focus:outline-none font-bold py-3 pl-7 pr-4 text-white mt-2 mb-4"
              value={newPost.overview}
              onChange={(e) => setNewPost({ ...newPost, [e.target.name]: e.target.value })}
              placeholder="Thorough description of all changes. Link to all relevent
            contact addresses. Markdown is supported."
            />
          </div>
        </div>
        <div className="w-full">
          <div className="text-24 font-bold border-b border-solid border-lightGray pb-8 mt-8 md:mt-0">
            Actions
          </div>
          <div className="mt-8 flex flex-col space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <>
                <div key={i} className="flex items-center justify-between bg-black py-4 px-5">
                  <div className="text-18">0x046231a12d30248bad3322af74cea9c325627d32</div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      if (editingActions.includes(i)) {
                        const newEditingActions = editingActions.filter((a) => a !== i);
                        setEditingActions(newEditingActions);
                      } else {
                        setEditingActions((prevState) => [...prevState, i]);
                      }
                    }}
                  >
                    {editingActions.includes(i) ? (
                      <img src={closeCirclePrimary} alt="" />
                    ) : (
                      <img src={edit} alt="" />
                    )}
                  </div>
                </div>
                {editingActions.includes(i) && (
                  <div className="px-10 pt-10 pb-6 bg-darkGray rounded-2xl">
                    <input
                      name="actionText"
                      type="text"
                      className="primary-placeholder border border-solid border-primary bg-black
                           rounded-xl w-full focus:outline-none font-bold py-5 px-4 text-white mb-4"
                      value={editAction.text}
                      onChange={(e) =>
                        setEditAction({ ...editAction, [e.target.name]: e.target.value })
                      }
                      placeholder="Action On"
                    />
                    <input
                      name="title"
                      type="text"
                      className="primary-placeholder border border-solid border-primary bg-black
                           rounded-xl w-full focus:outline-none font-bold py-5 px-4 text-white mt-2 mb-4"
                      value={editAction.value}
                      onChange={(e) =>
                        setEditAction({ ...editAction, [e.target.name]: e.target.value })
                      }
                      placeholder="value"
                    />
                    <div className="flex justify-center items-center space-x-4 mt-6">
                      <button
                        className="bg-primary focus:outline-none py-2 px-16
                         rounded-2xl text-24 text-black"
                        onClick={() => {}}
                      >
                        OK
                      </button>
                      <button
                        className="bg-primary focus:outline-none py-2 px-12
                         rounded-2xl text-24 text-black"
                        onClick={() => {}}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className="">
              <div className="flex justify-center">
                <button
                  className="bgPrimaryGradient focus:outline-none py-3 px-4 mt-6
                         text-18 text-black w-full flex items-center justify-between"
                  onClick={() => setAddAction((bool) => !bool)}
                >
                  <div className="text-24">Add Action</div>
                  <img src={plusCircle} alt="" />
                </button>
              </div>
              {addAction && (
                <div
                  className="px-10 pt-10 pb-6 border border-solid border-lightGray
                              rounded-b-2xl"
                >
                  <input
                    name="actionText"
                    type="text"
                    className="primary-placeholder border border-solid border-primary bg-transparent
                           rounded-xl w-full focus:outline-none font-bold py-5 px-4 text-white mb-4"
                    value={newAction.text}
                    onChange={(e) =>
                      setNewAction({ ...newAction, [e.target.name]: e.target.value })
                    }
                    placeholder="Action On"
                  />
                  <input
                    name="title"
                    type="text"
                    className="primary-placeholder border border-solid border-primary bg-transparent
                           rounded-xl w-full focus:outline-none font-bold py-5 px-4 text-white mt-2 mb-4"
                    value={newAction.value}
                    onChange={(e) =>
                      setNewAction({ ...newAction, [e.target.name]: e.target.value })
                    }
                    placeholder="Value"
                  />
                  <div className="flex justify-center items-center space-x-4 mt-6">
                    <button
                      className="bg-primary focus:outline-none py-2 px-16
                         rounded-2xl text-24 text-black w-full"
                      style={{ maxWidth: 200 }}
                      onClick={() => {}}
                    >
                      OK
                    </button>
                    <button
                      className="bg-primary focus:outline-none py-2 px-12
                         rounded-2xl text-24 text-black w-full"
                      style={{ maxWidth: 200 }}
                      onClick={() => {}}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 md:mt-0">
        <button
          className="bgPrimaryGradient focus:outline-none py-2 px-12 mt-6
                         rounded-md text-24 text-black w-full"
          style={{ maxWidth: 320 }}
          onClick={() => {
            setNewPost({});
            setNewAction({});
            setEditingActions((prevState) => []);
            setAddAction(false);
            onCloseModal();
          }}
        >
          Submit Proposal
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        title={title}
        content={content}
        open={open}
        onSetOpen={onSetOpen}
        onCloseModal={onCloseModal}
        afterCloseModal={() => {}}
        width="max-w-1300"
      />
    </div>
  );
}

export default CreatePostModal;
