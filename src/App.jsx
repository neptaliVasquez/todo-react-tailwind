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
    completed: true,
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

  // Methods
  const createTodo = (title) =>{
    const newTodo ={
      id: todos.length+1,
      title: title.trim(),
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  const deleteTodo=(id) =>{
    const finalTodos = todos.filter(el=> el.id !=id);
    setTodos(finalTodos);
  }

  const updateTodo=(id) =>{
    const todosUpdated = todos.map(el=>{
      if(el.id ===id){
        el.completed = !el.completed
      }
      return el;
    })
    setTodos([...todosUpdated]);
  }

  return (
    <div className='min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat px-4'>
      <Header />
      <main className='mx-automt-8 container px-4'>
        <TodoCreate createTodo={createTodo} />
        <TodoList updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} />
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
