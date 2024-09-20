import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value || !category) return;
      addTodo(value,category);
      setValue("");
      setCategory("");
    };
  
  return (
    <div className="todo-form mb-4">

        <h3> Criar Tarefa: </h3>

        <form onSubmit={handleSubmit}>


        <input className = "p-2 mb-3 w-100 rounded" 
        type= "text" 
        placeholder = "Digite o Título"
        value = {value}
        onChange = {(e) => setValue(e.target.value)}/>


        <select
        value = {category} 
        className = "p-2 mb-3 w-100 form-select" 
        onChange={(e) => setCategory(e.target.value)}>
            <option value = ""> Selecione uma Categoria </option>
            <option value = "Trabalho"> Trabalho </option>
            <option value = "Pessoal"> Pessoal</option>
            <option value = "Estudos"> Estudos </option>
        </select>


        <button className ="btn btn-light rounded p-10" 
        type = "submit"> Criar Tarefa </button>

        </form>   
    </div>
  )
}

export default TodoForm