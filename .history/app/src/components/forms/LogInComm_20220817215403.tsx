import React from 'react'
import './LoginComm.css'

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
