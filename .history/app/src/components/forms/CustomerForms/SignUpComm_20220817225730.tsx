import React from 'react';
import './SignUpComm.css'
import { Link } from 'react-router-dom';

const SignUpComm = () => {


  const submitHandler = () => {
  };


  return (
    <form onSubmit={submitHandler}>
        <div className='details'>
          <h1>Sign Up</h1>
          <input type="text" placeholder='Name' required onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="email" placeholder='Email' required onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="password" placeholder='Password' required onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="password" placeholder='Confirm Password' required onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <small></small>
        </div>
        <button type="submit">Sign Up</button>
        <p>already have an account?<Link to="/login">Log In</Link></p>
    
    </form>
  )
}

export default SignUpComm
