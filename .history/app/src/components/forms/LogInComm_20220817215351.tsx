import React from 'react'
import './Lo'

const LogIn = () => {
  return (
    <form>
      <div className="details">
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
      </div>
      <button>Log In</button>
    </form>
  )
}

export default LogIn
