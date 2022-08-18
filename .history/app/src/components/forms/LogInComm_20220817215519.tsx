import React from 'react'
import './LoginComm.css'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <form>
      <div className="details">
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
      </div>
      <button>Log In</button>
      <p>Don't have an account?<Link to="">Log In</Link></p>
    </form>
  )
}

export default LogIn
