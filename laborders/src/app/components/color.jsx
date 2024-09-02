import React, { useState } from 'react';

const ColorPalette = () => {
  const colors = [
    { label: 'A1', color: '#EFCFBD', border: 'border-blue-500' },
    { label: 'A2', color: '#E7BE9A', border: 'border-blue-500' },
    { label: 'A3', color: '#EAC39F', border: 'border-blue-500' },
    { label: 'A4', color: '#CF9A69', border: 'border-blue-500' },
    { label: 'B1', color: '#E7E0C9', border: 'border-blue-500' },
    { label: 'B2', color: '#E1BA97', border: 'border-blue-500' },
    { label: 'B3', color: '#E0AE82', border: 'border-blue-500' },
    { label: 'B4', color: '#E9BD90', border: 'border-blue-500' },
    { label: 'C1', color: '#E9C5AF', border: 'border-blue-500' },
    { label: 'C2', color: '#E4BDA1', border: 'border-blue-500' },
    { label: 'C3', color: '#DDB089', border: 'border-blue-500' },
    { label: 'C4', color: '#CF9D75', border: 'border-blue-500' },
    { label: 'D2', color: '#DDB59A', border: 'border-blue-500' },
    { label: 'D3', color: '#E1B99A', border: 'border-blue-500' },
    { label: 'D4', color: '#DCB488', border: 'border-blue-500' },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="flex justify-center items-center my-5">
      <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-12 gap-2">
        {colors.map(color => (
          <div 
            key={color.label} 
            style={{ backgroundColor: color.color }}
            className={`w-12 h-12 rounded-full ${color.border} border-2 flex justify-center items-center cursor-pointer ${selectedColor === color.label ? 'ring-4 ring-indigo-500' : ''}`}
            onClick={() => setSelectedColor(color.label)}
          >
            <span className="text-xs font-medium text-gray-700">{color.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
