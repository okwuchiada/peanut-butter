
 const buttonStyle ={
     padding: "10px",
     color: "#222",
     margin: "5px",
     border: "2px solid lightgreen",
    backgroundColor: "#eee",
    borderRadius: "5px"
 }


function Button(props){
return(
    <button id={props.id} onClick={props.onClick} style={buttonStyle} > {props.children}</button>
)
}

export default Button;