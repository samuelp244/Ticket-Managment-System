import React from 'react';
import './SignUpComm.css'

const SignUpComm = () => {
  return (
    <form>
        <div className='details'>
          <input type="text" placeholder='Name' required/>
          {/* <select name="account type" id="acct-type">
              <option value="customer">Individual</option>
              <option value="root-user">Organization</option>
          </select> */}
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
          <input type="password" placeholder='Confirm Password' required/>
        </div>
        <button type="submit">Submit</button>
    
    </form>
  )
}

export default SignUpComm
