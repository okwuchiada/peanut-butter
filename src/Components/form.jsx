import Button from "./button";
import TextArea from './textarea';
import Input from './input';



const formStyleObject={
    backgroundColor: "lightgreen",
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    flexDirection:"column",
    justifyContent: "space between",
    alignItems: "center"

}



function Form({getValue, shopListItem, addItem}){

    const inputHandler =(e)=>{
        shopListItem=[]
        e.preventDefault();
        // Setting Values
        const title = e.target.elements.title.value;
        const quantity = e.target.elements.quantity.value;
        const desc = e.target.elements.desc.value;

        // Guard Function
        if(title === "" || quantity==="" || desc===""){
         return false
            }

            // Creating new object list in function
            let newList = {
                title: title,
                 quantity: quantity,
                 desc:desc
            };
            getValue(shopListItem.push(newList)) 

            
            // I got lost here

          
     }


    return(
        <form style={formStyleObject} onSubmit={inputHandler} >
      <div className ="form">
                <Input type="text" name="title" id="title"  placeholder="Item-Title" />
                <Input type="number" name="quantity" id="quantity" placeholder="Quantity" />
                
            </div>
            <TextArea  name="desc" id="desc" placeholder="Description" />
            <Button id="enter-btn">Add List</Button>
     
     </form>
     
    )
}

export default Form;