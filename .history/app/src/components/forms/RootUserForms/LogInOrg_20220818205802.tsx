import React,{ useState } from 'react'
import './LoginOrg.css'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

const LogInOrg = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();


  const submitHandler = (e:any) => {
    e.preventDefault();

    Axios.post("http://localhost:1337/api/v1/loginUser",{
      email: email,
      password: password
    }).then(res=>{
      console.log(res.data);
      if(res.data.status==='ok'){
        if(res.data.role==='rootUser'){
          navigate('/orgdashboard')
        }else{
          navigate('/orguserdb')
        }
      }  

      
 
    })

    setEmail('');
    setPassword('');
  };



  
  return (
    <form onSubmit={submitHandler}>
      <div className="details">
        <h1>Log In (Org)</h1>
        <input type="text" placeholder='Email' required value={email} onChange={()}/>
        <input type="password" placeholder='Password' required/>
        <small>forgot password?</small>
      </div>
      <button>Log In</button>
      <p>Don't have an account?<Link to="/orgsignup">Sign Up</Link></p>
    </form>
  )
}

export default LogInOrg
