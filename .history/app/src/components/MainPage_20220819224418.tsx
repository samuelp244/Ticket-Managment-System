import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="main-page">
      <Link to='/login'>Community LogIn</Link>

      <Link to='/orglogin'>Organization Login</Link>

      {/* <a href="#">Organization LogIn</a> */}
      <Footer/>
    </div>
  )
}

export default MainPage;
