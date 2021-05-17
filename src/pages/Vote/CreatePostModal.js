import React from 'react';
import arrowDown from '../../assets/icons/arrowDown.svg';
import crossPrimary from '../../assets/icons/crossPrimary.svg';
import Modal from '../../components/UI/Modal';
import TextEditor from './TextEditor';

function CreatePostModal({ open, onSetOpen, onCloseModal, values, onSetValues, items }) {
  const title = (
    <div className="grid grid-cols-3 justify-items-center items-center w-full mt-10">
      <div className="col-start-2 text-2xl font-bold">Create Proposal</div>
      <div
        className="col-start-3 justify-self-end pr-8 -mt-8 cursor-pointer"
        onClick={onCloseModal}
      >
        <img className="" src={crossPrimary} alt="close" />
      </div>
      <div className="col-span-3 text-lg mt-4">You Can Add 50 Actions as Maximum</div>
    </div>
  );

  const content = (
    <div className="pt-14 pb-8 px-4">
      <div className="px-5">
        <div className="flex items-center space-x-4 text-primary">
          <img src={arrowDown} alt="" />
          <div className="">Action 1</div>
        </div>
        <div className="">
          {items.map((i) => (
            <input
              key={i.key}
              id={i.name}
              name={i.name}
              type="text"
              className="border border-solid border-primary bg-transparent
                           rounded-xl w-full focus:outline-none font-bold py-3 px-4 text-white mt-2 mb-4"
              value={values[i.name]}
              onChange={onSetValues}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="bgPrimaryGradient focus:outline-none py-2 px-12
                         rounded-3xl text-base text-black"
            onClick={() => {}}
          >
            Add To Next
          </button>
        </div>
      </div>
      <TextEditor />
      <div className="flex justify-center">
        <button
          className="bgPrimaryGradient focus:outline-none py-2 px-12 mt-6
                         rounded-3xl text-base text-black font-bold"
          onClick={() => {}}
        >
          Create
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
        width="max-w-2xl"
      />
    </div>
  );
}

export default CreatePostModal;
