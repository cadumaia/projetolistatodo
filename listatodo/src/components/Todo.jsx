import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
    className="todo
    d-flex 
    justify-content-between
    align-items-center 
    bg-light 
    text-dark 
    mb-3
    rounded"
    style = {{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >

        <div className = "content ms-2 mt-2">

            <p> {todo.text} </p>

            <p className = "category"> 

            ({todo.category}) 

            </p>
          </div>
        <div>
          <button onClick = {() => completeTodo(todo.id)}
          type= "button" 
          className="complete btn me-2 btn-success btn-sm"> Completar </button>

          <button onClick = {() => removeTodo(todo.id)} 
          type= "button" 
          className= "remove btn m-1 btn-danger btn-sm"> X </button>
        </div>
    </div>
  )
}

export default Todo