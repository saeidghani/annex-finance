import React from 'react';
import Select from '../../components/UI/Select';

export default function ValueRange({ title, name, rangeValues, onSetRangeValues, options }) {
  return (
    <div className="w-full">
      <div className={rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'}>
        {title}
      </div>
      <div className="flex justify-between items-center space-x-4">
        <input
          id={name}
          name={name}
          type="text"
          className={`border border-solid border-gray bg-transparent
                           rounded-md w-full focus:outline-none font-bold px-4 py-6 md:py-5 ${
                             rangeValues.from && rangeValues.to ? 'text-black' : 'text-white'
                           }`}
          value={rangeValues[name]}
          onChange={onSetRangeValues}
        />
        <Select type="basic" options={options} logoClassName="" />
      </div>
    </div>
  );
}
