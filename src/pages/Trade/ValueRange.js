import React from 'react';
import Select from '../../components/UI/Select';

export default function ValueRange({ title, name, rangeValues, onSetRangeValues, options }) {
  return (
    <div className="w-full">
      <div
        className={
          rangeValues.from && rangeValues.to ? 'text-black text-18 mb-2' : 'text-white text-18 mb-2'
        }
      >
        {title}
      </div>
      <div className="flex justify-between items-center space-x-5">
        <input
          id={name}
          name={name}
          type="text"
          className={`border border-solid border-gray bg-transparent
                           rounded-10px w-full focus:outline-none text-18 font-bold px-4 py-4 md:py-5 ${
                             rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'
                           }`}
          style={{ height: '3.8125rem' }}
          value={rangeValues[name]}
          onChange={onSetRangeValues}
        />
        <Select
          type="basic"
          width="w-70"
          buttonClassName="bg-black"
          options={options}
          logoClassName=""
        />
      </div>
    </div>
  );
}
