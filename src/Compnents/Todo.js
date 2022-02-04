import react from "react";

const Todo = ({text, listItem, setListItem, task}) => {

    const deleteHandler = () =>{
        setListItem(listItem.filter((el) => el.id !== task.id));  
    };
    const completeHandler = () =>{
        setListItem(listItem.map(item => {
            if(item.id === task.id)
                return{
                    ...item, completed: !item.completed
                };
                return item;
        }))
              
    };
    return(
        <div className="task">
            <li className={`task-item ${task.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;