import React from 'react'

const SignUp = () => {
  return (
    <div>
      <input type="text" placeholder='Name'/>
      <select name="account type" id="acct-type">
        <option value="customer">Individual</option>
      </select>
    </div>
  )
}

export default SignUp
