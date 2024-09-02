import React, { useState } from 'react';

const Odontogram = () => {
  const teethPerQuadrant = {
    upperRight: [18, 17, 16, 15, 14, 13, 12, 11],
    upperLeft: [21, 22, 23, 24, 25, 26, 27, 28],
    lowerRight: [48, 47, 46, 45, 44, 43, 42, 41],
    lowerLeft: [31, 32, 33, 34, 35, 36, 37, 38]
  };

  const [selected, setSelected] = useState(Array(32).fill(false));

  return (
    <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
      {Object.entries(teethPerQuadrant).map(([key, teeth], index) => (
        <div key={key} className="flex flex-wrap justify-center">
          {teeth.map((tooth, idx) => (
            <div 
              key={idx} 
              className={`m-0 p-2 w-10 h-10 rounded-full border-2 flex justify-center items-center cursor-pointer text-sm font-semibold ${selected[index * 8 + idx] ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
              onClick={() => {
                const newSelected = [...selected];
                newSelected[index * 8 + idx] = !newSelected[index * 8 + idx];
                setSelected(newSelected);
              }}
            >
              {tooth}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Odontogram;
