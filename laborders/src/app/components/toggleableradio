import React, { useState } from 'react';

const ToggleableRadio = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <label className="flex items-center cursor-pointer">
        <div className={`w-5 h-5 mr-3 rounded-full border ${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}>
          {isChecked && <div className="w-3 h-3 bg-white m-auto rounded-full"></div>}
        </div>
        <input
          type="checkbox"
          className="hidden" // Hide the checkbox
          checked={isChecked}
          onChange={handleChange}
        />
        Simulated Radio Button
      </label>
    </div>
  );
};

export default ToggleableRadio;
