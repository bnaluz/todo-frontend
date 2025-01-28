'use client';

import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa6';

interface TaskFormProps {
  onSave: (title: string, color: string) => void;
  onCancel: () => void;
}

const colors = [
  '#FF3B30',
  '#FF9500',
  '#FFCC00',
  '#34C759',
  '#007AFF',
  '#5856D6',
  '#AF52DE',
  '#FF2D55',
  '#A2845E',
];

const TaskForm: React.FC<TaskFormProps> = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSave = () => {
    if (title.trim()) {
      onSave(title, selectedColor);
      setTitle('');
      setSelectedColor(colors[0]);
    }
  };

  return (
    <div className="absolute w-[736px] min-h-[309px] left-1/2 top-[291px] -translate-x-1/2 bg-[#1A1A1A] p-6 rounded-lg shadow-md flex flex-col gap-4">
      <button
        onClick={onCancel}
        className="text-[#FFFFFF] hover:text-[#ffffffda] self-start"
      >
        ←
      </button>

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-semibold text-[#4EA8DE]">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Ex. Brush your teeth"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#262626] border border-[#333333] rounded-lg p-2 text-[#FFFFFF] placeholder-[#808080] outline-none focus:border-[#4EA8DE]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[#4EA8DE]">Color</span>
        <div className="flex gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer ${
                selectedColor === color ? 'border-4 border-[#FFFFFF]' : ''
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className="flex items-center justify-center w-full h-[52px] bg-[#1E6F9F] hover:bg-[#2591CF] text-[#F2F2F2] font-semibold rounded-lg shadow-md transition duration-300"
        disabled={!title.trim()}
      >
        {title.trim() ? (
          <>
            Save Task <FaCheck className="ml-2" />
          </>
        ) : (
          <>
            Add Task <CiCirclePlus className="ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default TaskForm;
