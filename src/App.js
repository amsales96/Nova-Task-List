import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Compnents/Form';
import TodoList from './Compnents/TodoList'
import logo from './Compnents/novalogo.png'

function App() {
  
  // States
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredItems, setFilteredItems] = useState([]);

  //Effects
  useEffect(() =>{
    getLocalTasks();
  }, []);

  useEffect(() =>{
    filterHandler();
    saveLocalTasks();
  }, [listItem,status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredItems(listItem.filter(task => task.completed === true));
        break;
      case 'uncompleted':
        setFilteredItems(listItem.filter(task => task.completed === false));
        break;
      default:
        setFilteredItems(listItem);
        break;
    }
  }

  const saveLocalTasks = () => { 
      localStorage.setItem("listItem", JSON.stringify(listItem));
  };

  const getLocalTasks = () => {
    if(localStorage.getItem("listItem")=== null){
      localStorage.setItem("listItem", JSON.stringify([]));
    }else{
      let taskLocal = JSON.parse(localStorage.getItem("listItem"));
      setListItem(taskLocal);
    }
  };

  return (
    <div className="App">
      <div class="logo">
          <img alt="Logo" src={logo} />     
      </div>
      <header>
      <h1>Today's Tasks</h1>
    </header>
    <Form setInputText={setInputText} listItem={listItem} setListItem={setListItem} inputText={inputText} setStatus={setStatus} filteredItems={filteredItems}/>
    <TodoList listItem={listItem} setListItem={setListItem} filteredItems={filteredItems} />
    </div>
  );
}

export default App;
