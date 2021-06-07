


const inputStyle ={
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #222",
    margin: "5px",

}

function Input(props){
    return(
        <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder} style={inputStyle} />
    )
}

export default Input;