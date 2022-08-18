import React from 'react';
import './SignUpComm.css'

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
        <p>no </p>
    
    </form>
  )
}

export default SignUpComm
