import "../styles/form.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";




const Register = () =>{
    const { register, handleSubmit } = useForm();
const history = useHistory();


const registerUser = ({email, password, confirmPassword}) =>{


if(!email){
    return alert('Please enter a valid email address')
}
if(password !== confirmPassword){
    return alert(`Passwords don't match`)
}


    let newuser = {
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }
      
      fetch(`https://user-manager-three.vercel.app/api/user/register`, {
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

    
    history.push('/home')

}
    
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <h2>Sign Up for Free</h2>
            <div>
                <input 
                type="text"  
                id="email"
                placeholder="email"
                {...register('email', {required: true})}
                />

                <input 
                type="password"  
                placeholder="Password"
                id="password"
                {...register('password', {required: true})}
                />

                <input 
                type="password"  
                placeholder="Confirm Password"
                id="confirmPassword"
                {...register('confirmPassword', {required:true})}
                />
            </div>
            <button type="submit">Get Started</button>
          

        </form>
    )
}

export default Register;

