import { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
  };
  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className='mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4 transition-all duration-1000 dark:bg-slate-800'
    >
      <span className='inline-block h-5 w-5 rounded-full border-2'></span>
      <input
        className='w-full text-gray-500 outline-none transition-all duration-1000 dark:bg-slate-800'
        type='text'
        placeholder='Create a new todo...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
