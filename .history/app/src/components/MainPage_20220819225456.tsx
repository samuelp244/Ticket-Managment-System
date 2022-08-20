import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="main-page">
      <div className="navbar">
        <div className="navlinks">
          <Link to='/login' id=''>Community LogIn</Link>
          <Link to='/orglogin'>Organization Login</Link>
        </div>
      </div>
      

      
      <Footer/>
    </div>
  )
}

export default MainPage;
