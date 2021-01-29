import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './App.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'tarea 1',
  done: false
}]

function App() {

  const [ todos ] = useReducer(todoReducer, initialState);

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
          <form>
            <input 
              type='text'
              autoComplete='off'
              name='description'
              className='form-control'
            />

            <button
              className='btn btn-outline-primary mt-1 btn-block'
            >Agregar</button>
          </form>
        </div>
      </div>


    </div>
  );
}

export default App;
