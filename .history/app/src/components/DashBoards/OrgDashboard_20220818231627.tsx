import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const OrgDashboard = () => {

  const [userName,setUserName] = useState('');
  const [organization,setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const navigate = useNavigate();

  const submitHandler= (e:any) => {
    e.preventDefault();
    Axios.post("",{
      
    })

    setUserName('');
    setOrganization('');
    setEmail('');
    setPassword('');
    setConfPassword('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>User Sign Up</h1>
        <div className="details">
          <input type="text" placeholder='User Name' value={userName} onChange={(e:any)=>{
            setUserName(e.target.value);
          }}/>
          <input type="text" placeholder='Organization' value={organization} onChange={(e:any)=>{
            setOrganization(e.target.value);
          }}/>
          <input type="text" placeholder='Org. Mail' value={email} onChange={(e:any)=>{
            setEmail(e.target.value);
          }}/>
          <input type="text" placeholder='Password' value={password} onChange={(e:any)=>{
            setPassword(e.target.value);
          }}/>
          <input type="text" placeholder='Confirm Password' value={confPassword} onChange={(e:any)=>{
            setConfPassword(e.target.value);
          }}/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default OrgDashboard
