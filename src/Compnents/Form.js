import react from "react";

const Form= ({ setInputText,listItem,setListItem,inputText,setStatus }) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }; 
    const submitTaskHandler = (e) =>{
      e.preventDefault();
      setListItem([
        ...listItem, {text: inputText, completed: false, id: Math.random() * 1000}
      ]);
      setInputText("");
    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" />
        <button onClick={submitTaskHandler} className="task-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="listItem" className="filter-task">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;