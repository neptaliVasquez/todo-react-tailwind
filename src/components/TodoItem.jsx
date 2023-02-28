import CheckIcon from './icons/CheckIcon';
import CrossIcon from './icons/CrossIcon';

const TodoItem = ({ todo, deleteTodo,updateTodo }) => {
  const { id, title, completed } = todo;

  const handleDeleteTodo=()=>{
    deleteTodo(id);
  }
  const handleUpdateTodo=()=>{
    updateTodo(id);
  }

  return (
    <article className='flex justify-between gap-4 border-b border-b-gray-200'>
      <div className='flex items-center gap-4'>
        <button onClick={handleUpdateTodo} className='inline-block h-5 w-5 rounded-full border-2 bg-red-500'>
          {
            todo.completed && <CheckIcon />
          }

        </button>
        <p className={completed ? 'grow text-gray-500 line-through' : 'grow text-gray-500'}>{title}</p>
      </div>
      <button onClick={handleDeleteTodo}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
