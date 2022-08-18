import React from 'react';
import './SignUpComm.css'
import { Link } from 'react-router-dom';

const SignUpComm = () => {
  return (
    <form>
        <div className='details'>
          <input type="text" placeholder='Name' required/>
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
          <input type="password" placeholder='Confirm Password' required/>
        </div>
        <button type="submit">Submit</button>
        <p>already have an account?<Link to="">Log In</Link></p>
    
    </form>
  )
}

export default SignUpComm
