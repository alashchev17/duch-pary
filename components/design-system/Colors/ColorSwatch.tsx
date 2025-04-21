import React from 'react';

interface ColorSwatchProps {
  color: string;
  name: string;
  textColor?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ 
  color, 
  name, 
  textColor = '#FFFFFF' 
}) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div 
        className="w-24 h-24 rounded-md shadow-md"
        style={{ 
          backgroundColor: color, 
          boxShadow: 'inset 0px 0px 12px 0px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      ></div>
      <div className="flex flex-col gap-1">
        <span 
          className="font-manrope font-semibold text-sm"
          style={{ color: textColor }}
        >
          {name}
        </span>
        <span 
          className="font-manrope text-xs opacity-80"
          style={{ color: textColor }}
        >
          {color}
        </span>
      </div>
    </div>
  );
};

export default ColorSwatch;
