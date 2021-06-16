
import "../styles/list.css"







function List({list, index, deleteList}){
    
return(
    <div className="list">
        <div className="item">
       <h3>{list.title}</h3> 
       <p>{list.description}</p>
       </div>
       <div className="buttons">
           <button className="list-btn" onClick={ () => deleteList(index)}> Done</button>      
           <button className="list-btn" onClick={ () => deleteList(index)}> Edit</button>      
       </div>
    </div>
)
 
    
}

export default List;