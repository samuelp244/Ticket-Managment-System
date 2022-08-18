import React from 'react'
import './LoginOrg.css'
import { Link } from 'react-router-dom'

const LogInOrg = () => {
  return (
    <form>
      <div className="details">
        <h1>Log In</h1>
        <input type="text" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
        <small>forgot password?</small>
      </div>
      <button>Log In</button>
      <p>Don't have an account?<Link to="/orgsignup">Sign Up</Link></p>
    </form>
  )
}

export default LogInOrg
