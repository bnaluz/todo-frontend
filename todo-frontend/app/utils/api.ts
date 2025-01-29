const BASE_URL = 'http://localhost:5000/tasks';

//CREATE
export const createTask = async (task: { title: string; color: string }) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
};

//READ
export const getTasks = async () => {
  const response = await fetch(BASE_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

//UPDATE
export const toggleTaskCompletion = async (id: number, completed: boolean) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });

  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
};

//DELETE
export const deleteTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete task');
  return response.json();
};
