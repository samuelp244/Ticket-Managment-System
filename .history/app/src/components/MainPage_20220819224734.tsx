import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="main-page">
      div.navba
      <Link to='/login'>Community LogIn</Link>

      <Link to='/orglogin'>Organization Login</Link>

      
      <Footer/>
    </div>
  )
}

export default MainPage;
