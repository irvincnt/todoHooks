import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from './hooks/useForm';

import './App.css';

const init = () => { // when the component is reloaded it runs and sets initial state the useReducer()
  return JSON.parse(localStorage.getItem('todos')) || []; // Parse the todos to Object and validate if they exist
}

function App() {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, resetValues] = useForm({
    description: ''
  })

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos)) // Convert the values ​​to send (string) them to the localstorage
  }, [todos])

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action) // fire method
    resetValues()
  }

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }

    dispatch(action)
  }

  const handleComplite = (id) => {
    const action = {
      type: 'complite',
      payload: id
    }

    dispatch(action)
  }

  return (
    <div className="App">
      <h1>TODO APP ({ todos.length })</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='lisy-group list-group-flush'>
            {
              todos.map((todo, i) => (
                <li
                  key={todo.id}
                  className='list-group-item'
                  >
                    <p
                      className={`${todo.done && 'complite'}`}
                      onClick={() => handleComplite(todo.id)}
                    >{i + 1}. {todo.desc}</p>
                    <button 
                      className='btn btn-danger'
                      onClick={() => handleDelete(todo.id)}
                    > Eliminar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-5'>
          <h2>Agregar todo</h2>
          <hr/>
          <form onSubmit={handlerSubmit}>
            <input 
              type='text'
              autoComplete='off'
              name='description'
              value={description}
              className='form-control'
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-1 btn-block'
            >Agregar</button>
          </form>
        </div>
      </div>


    </div>
  );
}

export default App;
