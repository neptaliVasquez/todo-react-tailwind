import CrossIcon from './icons/CrossIcon';

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article className='flex justify-between gap-4 border-b border-b-gray-200'>
      <div className='flex items-center gap-4'>
        <span className='inline-block h-5 w-5 rounded-full border-2'></span>
        <p className='grow text-gray-500'>{title}</p>
      </div>
      <button>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
