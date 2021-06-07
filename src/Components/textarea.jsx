


const textAreaStyle={
    height:"100px",
    width:"90%",
    borderRadius: "5px",
    margin:"5px auto"

}


const Textarea = (props) =>{
    return(
        <>
        <textarea id={props.id} name={props.name} value={props.value}  placeholder={props.placeholder} onChange={props.textAreaHandler} style={textAreaStyle}></textarea>
        </>
    )
}

export default Textarea;