import React from 'react'

const SignUp = () => {
  return (
    <div>
      <input type="text" placeholder='Name'/>
      <select name="account type" id="acct-type">
        <option value="customer">Individual</option>
        <option value="root-user">Organization</option>
      </select>
      <input type="email" placeholder='Email' required/>
      <input type="password" placeholder='Password' required/>
      <input type="con" />
    </div>
  )
}

export default SignUp
