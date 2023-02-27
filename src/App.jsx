import { useState } from 'react';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';

const initialStateTodos = [
  {
    id: 1,
    title: 'Go to the gym',
    completed: false,
  },
  {
    id: 2,
    title: 'Drink water',
    completed: false,
  },
  {
    id: 3,
    title: 'Study React',
    completed: false,
  },
  {
    id: 4,
    title: 'Play Raw deal',
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  return (
    <div className='min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat px-4'>
      <Header />
      <main className='mx-automt-8 container px-4'>
        <TodoCreate />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>
      <footer className='mt-12 text-center text-gray-500'>
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
