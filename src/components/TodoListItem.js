export const TodoListItem = ({i,todo, handleComplite, handleDelete}) => {
  return (
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
  )
}