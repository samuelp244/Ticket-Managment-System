import React,{ useState } from 'react'
import './LoginComm.css'
import { Link, useN } from 'react-router-dom'
import Axios from 'axios'

const LogInComm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submitHandler = (e:any)=>{
    e.preventDefault();
    Axios.post("http://localhost:1337/api/v1/loginCustomer",{
      email: email,
      password: password,
    }).then(res=>{
      console.log(res)
    })
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="details">
        <h1>Log In (Comm)</h1>
        <input type="text" placeholder='Email' required value={email} onChange={(e:any)=>{
          setEmail(e.target.value);
        }}/>
        <input type="password" placeholder='Password' required value={password} onChange={(e:any)=>{
          setPassword(e.target.value);
        }}/>
        <small>forgot password?</small>
      </div>
      <button>Log In</button>
      <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>
    </form>
  )
}

export default LogInComm
