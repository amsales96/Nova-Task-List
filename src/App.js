import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Compnents/Form';
import TodoList from './Compnents/TodoList'
import logo from './Compnents/novalogo.png'

function App() {
  
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Effects
  useEffect(() =>{
    getLocalTodos();
  }, []);

  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => { 
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <div class="logo">
          <img alt="Logo" src={logo} />     
      </div>
      <header>
      <h1>Todo List</h1>
    </header>
    <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} filteredTodos={filteredTodos}/>
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
