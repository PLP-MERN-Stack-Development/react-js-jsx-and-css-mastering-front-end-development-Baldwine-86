import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <NavLink to="/" className="text-blue-500 hover:text-blue-600">Home</NavLink>
          <NavLink to="/tasks" className="text-blue-500 hover:text-blue-600">Tasks</NavLink>
        </div>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;