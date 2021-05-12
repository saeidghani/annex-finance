import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import primaryBigArrow from '../../assets/icons/primaryBigArrow.svg';

function EnableCollateralModal({ open, onSetOpen, onCloseModal, onOpenConfirmModal }) {
  const title = (
    <div className="text-center text-xl font-bold mt-4 mx-16 py-6 border-b border-solid border-gray-600">
      Enable as Collateral
    </div>
  );

  const content = (
    <div className="px-14 pb-14 pt-8">
      <div className="text-center">
        Each Asset used as collateral increases your borrowing limit. Be careful, this can subject
        the assest to being seized in liquidation.
        <Link to="/#">
          <div className="text-primary">Learn more.</div>
        </Link>
      </div>
      <div className="flex flex-col space-y-8 mt-10">
        <div
          className="flex justify-between items-center pb-6
                        border-b border-solid border-gray-600"
        >
          <div className="text-white text-lg">Borrow Limit</div>
          <div className="flex">
            <div className="">$0.00</div>
            <div className="text-primary">
              <img src={primaryBigArrow} alt="arrow" className="mx-4 fill-current" />
            </div>
            <div className="">$0</div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-6">
          <div className="text-white text-lg">Borrow Limit Used</div>
          <div className="flex">
            <div className="">0%</div>
            <img src={primaryBigArrow} alt="arrow" className="mx-4" />
            <div className="">0%</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button
          className="focus:outline-none bg-primary py-4 rounded text-lg
                           w-full max-w-350px text-black"
          onClick={onOpenConfirmModal}
        >
          USED ATOKEN AS COLLATERAL
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
        width="max-w-xl"
      />
    </div>
  );
}

export default EnableCollateralModal;
