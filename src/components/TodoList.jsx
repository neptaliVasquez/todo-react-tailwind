import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className='mt-8 overflow-hidden rounded-md bg-white transition-all duration-1000  dark:bg-slate-800 [&>article]:p-4'>
      {todos.map((todo) => (
        <TodoItem
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
