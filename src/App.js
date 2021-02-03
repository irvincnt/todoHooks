import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import './App.css';

const init = () => { // when the component is reloaded it runs and sets initial state the useReducer()
  return JSON.parse(localStorage.getItem('todos')) || []; // Parse the todos to Object and validate if they exist
}

function App() {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos)) // Convert the values ​​to send (string) them to the localstorage
  }, [todos])

  const handlerAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id
    })
  }

  const handleComplite = (id) => {
    dispatch({
      type: 'complite',
      payload: id
    })
  }

  return (
    <div className="App">
      <h1>TODO APP ({ todos.length })</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          {/* TodoList, todos, handleComplite, handleDelete */}
          <TodoList 
            todos={todos}
            handleComplite={handleComplite}
            handleDelete={handleDelete}
          />
        </div>
        <div className='col-5'>
          <TodoForm handlerAddTodo={handlerAddTodo}/>
        </div>
      </div>


    </div>
  );
}

export default App;
