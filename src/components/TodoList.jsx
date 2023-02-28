import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className='mt-8 rounded-md bg-white [&>article]:p-4'>
      {
      todos.map((todo) => (
        <TodoItem updateTodo={updateTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
      ))
      }
    </div>
  );
};

export default TodoList;
