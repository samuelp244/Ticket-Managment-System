import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';

const OrgDashboard = () => {

  const [userName,setUserName] = useState('');
  const [organization,setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div>
      <form>
        <h1>User Sign Up</h1>
        <div className="details">
          <input type="text" placeholder='User Name' onChange={(e:any)=>{
            setUserName(e.target.value);
          }}/>
          <input type="text" placeholder='Organization' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='Org. Mail' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='Password' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='Confirm Password' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default OrgDashboard
