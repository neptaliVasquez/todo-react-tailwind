const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className='container mx-auto  mt-8 flex justify-evenly rounded-md bg-white p-4 font-semibold  dark:bg-slate-800'>
      <button
        className={filter === 'all' ? 'text-blue-500' : 'text-gray-500'}
        onClick={() => changeFilter('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'text-blue-500' : 'text-gray-500'}
        onClick={() => changeFilter('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'text-blue-500' : 'text-gray-500'}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
    </section>
  );
};

export default TodoFilter;
