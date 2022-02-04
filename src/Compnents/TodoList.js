import react from "react";
import Todo from "./Todo";

const TodoList = ({listItem,setListItem,filteredItems}) => {
    
    return(
        <div className="task-container">
            <ul className="task-list">
                {filteredItems.map(task => (
                    <Todo key={task.id} text={task.text} task={task} listItem={listItem} setListItem={setListItem}/>
                ))}
            </ul>  
        </div>
    );
};

export default TodoList;