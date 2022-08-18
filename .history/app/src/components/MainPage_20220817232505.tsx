import React from 'react'
import {Link} from 'react-router-dom'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="main-page">
      <Link to='/login'>Community LogIn</Link>

      <Link to='/orglogin'>Organization

      {/* <a href="#">Organization LogIn</a> */}
    </div>
  )
}

export default MainPage;
