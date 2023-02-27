import MoonIcon from './icons/MoonIcon';
const Header = () => {
  return (
    <header className='container mx-auto px-4 pt-8'>
      <div className='flex justify-between px-4 pt-8'>
        <h1 className='text-3xl font-semibold uppercase tracking-[.4em] text-white'>
          todo
        </h1>
        <button>
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
