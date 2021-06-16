import "../styles/button.css"
 


function Button(props){
return(
    <button id={props.id} onClick={props.onClick} className={props.class} > {props.children}</button>
)
}

export default Button;