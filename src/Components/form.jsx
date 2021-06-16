import Button from "./button"
import { useForm } from "react-hook-form"
import "../styles/form.css"




const formStyle  = {
   
    border: "1px solid #333",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#eee",
    maxWidth: "600px"
    
}

const Form = ({addList}) =>{

const { register, handleSubmit } = useForm();

const todoFormHandler = ({ item, description}) =>{


    let newtodo={
        userId:item,
        completed: false,
        title: item,
        description: description
    }
    
      
      fetch(`https://user-manager-three.vercel.app/api/todo/create`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newtodo)
      })
        .then(res => res.json())
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          console.log('this error occurred', err)
        })
    
    addList(newtodo)
    
    

}

    return(
        <form onSubmit={handleSubmit(todoFormHandler)} style={formStyle}>
            <input 
            id="item" 
            type="text" 
            name="item"  
            placeholder="To-do" 
            {...register('item', {required: true})}
           />
           <input
           id="qty"
           type="text"
           name="description"
           placeholder="To-do Description"
           {...register('description')}
           />
            <Button>+</Button>
        </form>
    )
}



export default Form;