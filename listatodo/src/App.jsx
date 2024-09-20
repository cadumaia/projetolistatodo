import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './components/TodoForm';
import Todo from './components/todo';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
const [todos, setTodos] = useState([
  
{
      id:1,
      text: "Criar Funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra Academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
]);

    const [search,setSearch] = useState("");


    const addTodo = (text, category) => {

        const newTodos = [...todos, {
            id: Math.floor(Math.random() * 1000),
            text,
            category,
            isCompleted: false,
        },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {

    const newTodos = [...todos]

    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
  );
    setTodos(newTodos);
  }


  return(
  <div className="app">

    <h1> Lista de Tarefas </h1>
    <Search search = {search} setSearch = {setSearch} />
    <Filter />
    <div className="todo-list mb-5 pb-5 border-bottom">
      
      {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .map((todo) => (

        <Todo key={todo.id} todo = {todo} removeTodo = {removeTodo} completeTodo = {completeTodo}/>

      ))}

    </div>
      <TodoForm addTodo = {addTodo}/>
  </div>
  )
}

export default App;
