import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faComments,
  faChartSimple,
  faGear,
  faCube,
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { label: 'Home', icon: faHouse, path: '/' },
  { label: 'Messages', icon: faComments, path: '/messages' },
  { label: 'Analytics', icon: faChartSimple, path: '/analytics' },
  { label: 'Settings', icon: faGear, path: '/settings' },
];

export const Sidebar = () => {
  return (
    <div className='w-20 min-h-screen bg-white dark:bg-gray-900 shadow-md p-4 ml-2'>
      <FontAwesomeIcon
        icon={faCube}
        className='text-3xl text-blue-500 mb-6 ml-2'
      />
      <nav className='space-y-3'>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex justify-center items-center p-3 rounded-md transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`
            }
          >
            <FontAwesomeIcon icon={item.icon} className='w-6 h-6 my-2' />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
