import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoForm = ({handlerAddTodo}) => {

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
    handlerAddTodo(newTodo)
    resetValues()
  }

  return (
    <>
      <h2>Agregar tareaa</h2>
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
    </>
  )
}