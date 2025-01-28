'use client';

import React from 'react';
import TaskCard from './TaskCard';
import { HiOutlineClipboardList } from 'react-icons/hi';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

interface TaskBoardProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskBoard: React.FC<TaskBoardProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="absolute w-[736px] min-h-[309px] left-1/2 top-[291px] -translate-x-1/2 bg-[#1A1A1A] p-6 rounded-lg shadow-md flex flex-col gap-4">
      <div className="flex justify-between items-center text-[#F2F2F2] mb-4">
        <div className="text-sm font-semibold text-[#4EA8DE] flex items-center gap-1">
          Tasks
          <span className="bg-[#333333] text-white text-xs font-bold px-2 py-1 rounded-full">
            {totalTasks}
          </span>
        </div>
        <div className="text-sm font-semibold text-[#8284FA] flex items-center gap-1">
          Completed
          <span className="bg-[#333333] text-white text-xs font-bold px-2 py-1 rounded-full">
            {completedTasks} of {totalTasks}
          </span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center text-[#808080]">
          <HiOutlineClipboardList size={48} className="mb-4" />
          <p className="text-lg font-semibold">
            You don’t have any tasks registered yet.
          </p>
          <p className="text-sm">Create tasks and organize your to-do items.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))
      )}
    </div>
  );
};
