import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="main-page">
      <div className="navbar">
        <div className="navlinks">
          <Link >Home</Link>
          <Link to='/login' className="nav-link">Community LogIn</Link>
          <Link to='/orglogin' className="nav-link">Organization Login</Link>
        </div>
      </div>
      <div className="content"></div>
      

      
      <Footer/>
    </div>
  )
}

export default MainPage;
