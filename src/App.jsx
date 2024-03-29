import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  // Watch
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  // Methods
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const finalTodos = todos.filter((el) => el.id != id);
    setTodos(finalTodos);
  };

  const updateTodo = (id) => {
    const newList = [...todos];
    setTodos(
      newList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // Computed value
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState('all');
  const changeFilter = (filter) => setFilter(filter);
  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todos) => !todos.completed);
      case 'completed':
        return todos.filter((todos) => todos.completed);

      default:
        return todos;
    }
  };

  return (
    <div className='min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain  bg-no-repeat px-4 transition-all duration-1000 dark:bg-zinc-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]'>
      <Header />
      <main className='container mx-auto mt-8 px-4 md:max-w-xl'>
        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todos={filteredTodos()}
          />
        </DragDropContext>

        <TodoComputed clearCompleted={clearCompleted} count={itemsLeft} />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
      <footer className='mt-12 text-center text-gray-500'>
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
