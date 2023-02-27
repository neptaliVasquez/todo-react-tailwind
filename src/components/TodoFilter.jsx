const TodoFilter = () => {
  return (
    <section className='container mx-auto  mt-8 flex justify-evenly rounded-md bg-white p-4 font-semibold text-gray-600'>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
  );
};

export default TodoFilter;
