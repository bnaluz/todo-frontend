'use client';

import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

interface TaskCardProps {
  id: number;
  title: string;
  completed: boolean;
  color: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  completed,
  color,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="w-[736px] h-[72px] bg-[#262626] rounded-lg border border-[#333333] p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(id)}
          className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
            completed ? 'bg-[#5E60CE] text-white' : 'border-2 border-[#4EA8DE]'
          }`}
        >
          {completed && <FaCheck size={12} />}
        </button>

        <span
          className={`text-sm ${
            completed ? 'line-through text-[#808080]' : 'text-[#F2F2F2]'
          }`}
        >
          {title}
        </span>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="text-[#808080] hover:text-[#F2F2F2]"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default TaskCard;
