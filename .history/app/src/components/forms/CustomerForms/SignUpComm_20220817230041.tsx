import React,{ useState } from 'react';
import './SignUpComm.css'
import { Link } from 'react-router-dom';

const SignUpComm = () => {

  const [userName,setUserName]
  const [email, setEmail] = useState('');


  const submitHandler = () => {
  };


  return (
    <form onSubmit={submitHandler}>
        <div className='details'>
          <h1>Sign Up</h1>
          <input type="text" placeholder='Username' required onChange={(e:any)=>{
            (e.target.value);
          }}/>
          <input type="email" placeholder='Email' required onChange={(e:any)=>{
            setEmail(e.target.value);
          }}/>
          <input type="password" placeholder='Password' required onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="password" placeholder='Confirm Password' required onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <small>Didn't match the password</small>
        </div>
        <button type="submit">Sign Up</button>
        <p>already have an account?<Link to="/login">Log In</Link></p>
    
    </form>
  )
}

export default SignUpComm
