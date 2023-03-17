import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';
import { useState, useEffect } from 'react';

const initializeStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initializeStateDarkMode);

  const handleClickToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className='container mx-auto px-4 pt-8 md:max-w-xl'>
      <div className='flex justify-between px-4 pt-8'>
        <h1 className='text-3xl font-semibold uppercase tracking-[.4em] text-white'>
          todo
        </h1>
        <button onClick={handleClickToggleTheme}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
