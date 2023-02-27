import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div className='mt-8 rounded-md bg-white [&>article]:p-4'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
