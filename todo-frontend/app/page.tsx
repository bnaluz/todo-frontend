'use client';

import { useState } from 'react';
import Header from './components/Header';
import CreateTaskButton from './components/Task/CreateTaskButton';
import { TaskBoard } from './components/Task/TaskBoard';
import TaskForm from './components/Task/TaskForm';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleSave = (title: string, color: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false,
      color,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsCreatingTask(false);
  };

  const handleCancel = () => {
    setIsCreatingTask(false);
  };

  return (
    <div>
      <Header />
      {!isCreatingTask && (
        <CreateTaskButton onClick={() => setIsCreatingTask(true)} />
      )}
      {!isCreatingTask && (
        <TaskBoard
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
      {isCreatingTask && (
        <TaskForm onSave={handleSave} onCancel={handleCancel} />
      )}
    </div>
  );
}
