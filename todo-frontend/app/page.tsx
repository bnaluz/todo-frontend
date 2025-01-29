'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateTaskButton from './components/Task/CreateTaskButton';
import { TaskBoard } from './components/Task/TaskBoard';
import TaskForm from './components/Task/TaskForm';
import {
  getTasks,
  createTask,
  toggleTaskCompletion,
  deleteTask,
} from './utils/api';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleToggleTask = async (id: number) => {
    try {
      const task = tasks.find((task) => task.id === id);
      if (!task) return;

      const updatedTask = await toggleTaskCompletion(id, !task.completed);

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: updatedTask.completed } : task
        )
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSave = async (title: string, color: string) => {
    try {
      const newTask = await createTask({ title, color });
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setIsCreatingTask(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleCancel = () => {
    setIsCreatingTask(false);
  };

  return (
    <div>
      <Header />

      {!isCreatingTask && (
        <>
          <CreateTaskButton onClick={() => setIsCreatingTask(true)} />
          <TaskBoard
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </>
      )}

      {isCreatingTask && (
        <TaskForm onSave={handleSave} onCancel={handleCancel} />
      )}
    </div>
  );
}
