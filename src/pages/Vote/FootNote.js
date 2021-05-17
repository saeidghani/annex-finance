import React from 'react';

export default function FootNote() {
  return (
    <div className="flex justify-end mt-4">
      <div className="flex items-center space-x-4 mt-4">
        <div className="bg-primary w-6 h-6 rounded-full"></div>
        <div className="text-white">Latest Block: 7212174</div>
        <div className="text-white">ANN</div>
        <div className="text-white">Support</div>
        <div className="text-white">Whitepaper</div>
      </div>
    </div>
  );
}
