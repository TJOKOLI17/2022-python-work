import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(""); // useState returns an array.
    let isHighlighted = false;


    function handleInputChange(event){
        setNewTask(event.target.value); //makes input element chage as you type

    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        setTasks(t => tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function highlightTask(event){
        if(!isHighlighted){
            event.target.style.backgroundColor = "hsl(60, 100%, 50%)";
            isHighlighted = true;
        }else{
            event.target.style.backgroundColor = "hsl(0, 0%, 97%)";
            isHighlighted = false;
        }
    }

    return(
            <div className='to-do-list'>
                <h1>To-Do-List</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder='enter task...'
                        value={newTask}
                        onChange={handleInputChange}/>
                    <button className='add-btn' onClick={addTask}>Add</button>
                </div>
                <ol>
                        {tasks.map((task, index) => 
                        <li className="items" key={index}>
                            <span className='text' onClick={() => highlightTask(event)}>{task}</span>
                            <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                            <button className='move-btn' onClick={() => moveTaskUp(index)}>☝️</button>
                            <button className='move-btn' onClick={() => moveTaskDown(index)}>👇</button>
                        </li>)}
                </ol>
            </div>
    )

}

export default ToDoList