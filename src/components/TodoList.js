import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos,handleComplite, handleDelete }) => {
  return (
    <ul className='lisy-group list-group-flush'>
    {
      todos.map((todo, i) => (
        //TodoListItem, todo, handleComplite, handleDelete
        <TodoListItem
          key={todo.id}
          i={i}
          todo={todo}
          handleComplite={handleComplite}
          handleDelete={handleDelete}
        />
      ))
    }
  </ul>
  )
}