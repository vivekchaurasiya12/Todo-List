import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Todo = () => {
    const [Input,setInput] = useState("");
    const [List,setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null); 

    const addTask = () => {
        if (Input.trim() === "") return;
        if (isEditing) {
            const updatedList = [...List];
            updatedList[currentIndex] = Input;
            setList(updatedList);
            setIsEditing(false); 
            setCurrentIndex(null);
        } else {
            setList([...List, Input]); 
        }
        setInput(""); 
    };

    const deleteTask = (i)=>{
        const filterList = List.filter((_,elm)=>elm !==i)
       setList(filterList)
    }
    const editTask = (i) => {
        setInput(List[i]); 
        setIsEditing(true); 
        setCurrentIndex(i); 
    };

  return (
    <div className="main-container">
    <div className="container">
        <div className="input-box">
         <input type="text" value = {Input} onChange={(e) => {setInput(e.target.value)}}></input>
         <button onClick={addTask}>Add Task</button>
         </div>
        <div className="list">
            <ul>
                {List.map((item,i)=> <li key={i} className="task-item">
                                <span>{item}</span>
                                <div className="icons">
                                    <i
                                        className="fas fa-edit"
                                        onClick={() => editTask(i)}
                                    ></i>
                                    <i
                                        className="fas fa-trash-alt"
                                        onClick={() => deleteTask(i)}
                                    ></i>
                                </div>
                            </li>)}
            </ul>
        </div>
       
    </div>
    </div>
  )
}

export default Todo;
