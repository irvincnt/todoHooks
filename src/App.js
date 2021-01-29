import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from './hooks/useForm';

import './App.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'tarea 1',
  done: false
}]

function App() {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  const [{description}, handleInputChange, resetValues] = useForm({
    description: ''
  })

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

  console.log(todos)
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
                    <p>{i + 1}. {todo.desc}</p>
                    <button className='btn btn-danger'> Eliminar</button>
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
