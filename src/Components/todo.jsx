import List from "./List";
import Form from "./form";
import { useState } from "react";


const Todo = () =>{
    const [lists, setLists] = useState([{}])

    const addList = (newtodo) =>{
        const newList = [...lists, newtodo];
        setLists(newList);
    };
    const deleteList = (index) =>{
        const newList = [...lists];
        newList.splice(index, 1);
        setLists(newList);
    };
    

    return(
        <div className="todo-app" >
             <Form  addList={addList}/>
            <div className="list-container">
                 <div className="lists">
                    { lists.map((list, index) => (
                     <List key={index} index={index} list={list} deleteList={deleteList}  />
           ))}
          
                </div>
             </div>
        </div>
    )

}


export default Todo;