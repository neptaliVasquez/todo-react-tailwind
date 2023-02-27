import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';

const App = () => {
  return (
    <div>
      <header className='bg-[url(./assets/images/bg-mobile-light.jpg)] bg-cover bg-no-repeat px-6'>
        <div className='container mx-auto pb-8 '>
          <div className='flex justify-between pt-8'>
            <h1 className='text-3xl font-semibold uppercase tracking-[.4em] text-white'>
              todo
            </h1>
            <button>
              <MoonIcon />
            </button>
          </div>

          <form className='my-8 flex w-full items-center gap-4 rounded bg-white px-4'>
            <span className='inline-block h-3 w-3 rounded-full border-2'></span>
            <input
              className='w-full py-4 text-gray-500 outline-none'
              type='text'
              placeholder='Create a new todo...'
            />
          </form>
        </div>
      </header>
      <main className='container mx-auto min-h-screen bg-gray-200 px-6'>
        <div className='rounded-md bg-white'>
          <article className='flex justify-between border-b p-4'>
            <div className='flex items-center gap-4'>
              <span className='inline-block h-3 w-3 rounded-full border-2'></span>
              <p className='text-gray-600'> Complete js courseeeeeeeeeeee</p>
            </div>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className='flex justify-between border-b p-4'>
            <div className='flex items-center gap-4'>
              <span className='inline-block h-3 w-3 rounded-full border-2'></span>
              <p className='text-gray-600'> Complete js courseeeeeeeeeeee</p>
            </div>
            <button>
              <CrossIcon />
            </button>
          </article>
          <section className='flex justify-between rounded bg-white p-4 text-gray-500'>
            <span>1 items left</span>
            <button>Clear completed</button>
          </section>
        </div>

        <section className='container mx-auto  mt-8 flex justify-evenly rounded-md bg-white p-4 font-semibold text-gray-600'>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>
        <p className='mt-12 text-center text-gray-500'>
          Drag and drop to reorder list
        </p>
      </main>
    </div>
  );
};

export default App;
