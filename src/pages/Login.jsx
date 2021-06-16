import "../styles/form.css"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useRef } from "react"





const Login = () =>{

  const { register, handleSubmit } = useForm();
  const history = useHistory() ;
  const loginFormRef = useRef();
  const loginHandler = ({email, password})=>{
     
  
    let newuser = {
      email: email,
      password: password
    }
    
    fetch(`https://user-manager-three.vercel.app/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newuser)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log('this error occurred', err)
      })
      
     

      if(!email){
        return alert('Email not a registered account, please register')
        
      }
      
      
      

      history.push('/todo')
  }
    return (
        <form ref={loginFormRef} onSubmit={handleSubmit(loginHandler) }>
            <h2>Enter Login Details</h2>
            <div>
                <input 
                type="text"  
                placeholder="email"
                {...register('email', {required: true})}
                />

                <input 
                type="password"  
                placeholder="Password"
                {...register('password', {required: true})}
                />

             
                
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? 
              <br/>
              <a href="/register">Click to Register</a></p>
        </form>
       
    )
}

export default Login;