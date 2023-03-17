import CheckIcon from './icons/CheckIcon';
import CrossIcon from './icons/CrossIcon';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };
  const handleUpdateTodo = () => {
    updateTodo(id);
  };

  return (
    <article className='flex justify-between gap-4  border-b border-b-gray-200 transition-all duration-1000  dark:bg-slate-800'>
      <div className='flex items-center gap-4 '>
        {completed ? (
          <button
            onClick={handleUpdateTodo}
            className='flex h-5 w-5 items-center justify-center rounded-full border-2 bg-gradient-to-r from-blue-400 to-purple-400'
          >
            {todo.completed && <CheckIcon />}
          </button>
        ) : (
          <button
            onClick={handleUpdateTodo}
            className='flex h-5 w-5 items-center justify-center rounded-full border-2 bg-white'
          ></button>
        )}

        <p
          className={`grow text-gray-500 dark:text-gray-400 ${
            completed && 'line-through'
          }`}
        >
          {title}
        </p>
      </div>
      <button onClick={handleDeleteTodo}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
