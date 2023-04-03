import { Droppable, Draggable } from '@hello-pangea/dnd';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <Droppable droppableId='todos'>
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className='mt-8 overflow-hidden rounded-md bg-white transition-all duration-1000  dark:bg-slate-800 [&>article]:p-4'
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(droppableProvided) => (
                <TodoItem
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                  todo={todo}
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.dragHandleProps}
                  {...droppableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
