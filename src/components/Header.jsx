import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';
import { useState, useEffect } from 'react';
const Header = () => {
  const [darkMode, setDarkMode] = useState(null);

  const handleClickToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log('test');
    if (darkMode) {
      localStorage.theme = 'dark';
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <header className='container mx-auto px-4 pt-8'>
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
