const TodoComputed = ({ count, clearCompleted }) => {
  return (
    <section className='flex justify-between rounded rounded-b-md bg-white p-4 text-gray-400  dark:bg-slate-800'>
      <span>{count} items left</span>
      <button onClick={clearCompleted}>Clear completed</button>
    </section>
  );
};

export default TodoComputed;
