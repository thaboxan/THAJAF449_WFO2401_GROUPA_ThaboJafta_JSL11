// utils/taskFunction.js

// Simulate fetching tasks from localStorage
export const getTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Simulate saving tasks to localStorage
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const createNewTask = (task) => {
  const tasks = getTasks(); // Retrieve existing tasks
  const newTask = { ...task, id: new Date().getTime() }; // Create new task with unique ID
  tasks.push(newTask); // Add new task to the array
  saveTasks(tasks); // Save updated tasks array to local storage
  return newTask; // Return the newly created task
};


export const patchTask = (id, updates) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex > -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
      saveTasks(tasks);
      // Previously: location.reload(); Now: We'll refresh the UI instead.
  }
  return tasks; // Optionally return the updated tasks list for further processing
};

export const putTask = (id, updatedTask) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex > -1) {
    tasks[taskIndex] = updatedTask;
    saveTasks(tasks);
  }
  location.reload(); // Or better, re-render tasks without reloading
};

export const deleteTask = (id) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  saveTasks(updatedTasks);
  // Previously: location.reload(); Now: We'll refresh the UI instead.
  return updatedTasks; // Optionally return the updated tasks list for further processing
};
