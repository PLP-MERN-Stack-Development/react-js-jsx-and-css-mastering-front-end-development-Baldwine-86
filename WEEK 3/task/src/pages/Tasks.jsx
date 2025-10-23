import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Card title="Task Manager" className="max-w-2xl mx-auto">
      <form onSubmit={addTask} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder="Add a new task"
          />
          <Button type="submit">Add</Button>
        </div>
      </form>

      <div className="flex gap-2 mb-4">
        <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'primary' : 'secondary'}>All</Button>
        <Button onClick={() => setFilter('active')} variant={filter === 'active' ? 'primary' : 'secondary'}>Active</Button>
        <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'primary' : 'secondary'}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
            </div>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Tasks;