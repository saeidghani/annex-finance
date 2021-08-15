/* eslint-disable */
import React from 'react';
import Modal from '../../components/UI/Modal';
import closeWhite from '../../assets/icons/closeWhite.svg';

function ActionsModal({ open, onSetOpen, onCloseModal }) {
  const title = (
    <div
      className="flex justify-between items-center mt-4 mx-4 sm:mx-12 py-6
                  border-b border-solid border-lightGray"
    >
      <div className=""></div>
      <div className="text-center text-36 font-bold">Add Toni (Charlie)</div>
      <button
        className="focus:outline-none py-2 mb-2 rounded-md text-24 text-black"
        onClick={onCloseModal}
      >
        <img src={closeWhite} alt="" />
      </button>
    </div>
  );

  const content = (
    <div className="py-6 mx-4 sm:mx-12 overflow-auto">
      <div className="text-24">Actions</div>
      <div className="flex mt-6">
        <div className="mr-4">1</div>
        <p className="">
          Cash.change_validators((substrate_id=0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a56{' '}
          <br />
          84e7a56da27d,
          eth_address=0x55413a2d4908d130c908ccf2f298b235bacd427a),(substrate_id=0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48,
          eth_address=0xc9b0c3ed4efa833a7ad5459755a18f9689a0f7ac),(substrate_id=0x1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c,
          eth_address=0x286f2a10c28c966e97a72b8246041fbf636e673e),(substrate_id=0xea3da7e5b24ee22ce5fa252136745bfbefcb657201404f4479bcbe42135e234c,
          eth_address=0x4515e1ce5d4c42da4b0561f52ef12dee19f9c020),(substrate_id=0x3a54e2524f62b6f84cb06a0cc63d1dddf18645626f40a8f0b80780d018f8850a,
          eth_address=0xae7504dc36074395485867502ac893c8059b33aa),(substrate_id=0x22f0f143313380d43ae1d324ebba1071311cfd5d3cc10c2ec6a1325a3bc40c15,
          eth_address=0xe728a81d17388ec581b64996c687a0f7b98c761b),(substrate_id=0xe49dac98c62cd10266ae64e0026afa7337bb4ea0c48157171faa45843829fc13,
          eth_address=0x24f7fa621501bd05972cb64ba8a789cd866d406a),(substrate_id=0xe61bdf4e86ee8e4dcaf291544cf47817078bf8afd807c1718d6934ac8e0e9f36,
          eth_address=0xcd61496f004ef9fe14c7dac14e4ca9055fd60ae0),(substrate_id=0x42b270a275b2ed6f78ee7bd67ee29c18b40fbb787433317efe7327809f039c4b,
          eth_address=0x4b59cfe2ac72096dabbef40b944acf5ea2df95cb),(substrate_id=0xacdefd18f3a6607a982d5088e2139ca735cfe4bf0b30dc2e88911911afd69f64,
          eth_address=0x6df6143de1523ca35fc8a3dc5eb40ec8defd2b6e),(substrate_id=0xce8175d0ee61a797c7e97d711685b4aaf7f43756780b2c4b2ae2d3342d757c6a,
          eth_address=0x6a61dc52015945dfc6cd0c42f94a722d5022e3d1),(substrate_id=0x50c8cc7307bf706c13b5c90de7dd813be8424b1bbbbc7bf01c36ce29b6062603,
          eth_address=0x6df6143de1523ca35fc8a3dc5eb40ec8defd2b6e),(substrate_id=0x201612bd56c98e26b9c716b15701aeef21f51969a70eth_address=0xd4a1ea81{' '}
          <br />
          ced859316d9331cfee3236412bfcc8da),(substrate_id=0x88e13c6647c694efdefca4be49dbd73763b228e11d3ced815b83a558c14fbe7a,
          eth_address=0xfc6ade37c0704450e9fb9a8b94f5832c2975eda8),(substrate_id=0x34a0a2b4acf6c2642f812bceeca36ef8028a9c9b902d2fa9d1f7b84c2b087b24,
          eth_address=0x3b5604ff1f91a058c67ccea3e2d71e6d685d93ab))
        </p>
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
        width="max-w-900"
      />
    </div>
  );
}

export default ActionsModal;
