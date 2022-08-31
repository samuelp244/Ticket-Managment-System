import React from 'react'
import { useLocation } from 'react-router-dom'

export interface locationState{
  state:{
    username:string,
  }
}


const OrgUserDashBoard = () => {


  const location= useLocation() as locationState

  return (
    <div>
      <h1>User DashBoard</h1>
      <div>Active Tickets</div>
      <div>Accepted Tickets</div>
      <div>Closed Tickets</div>
    </div>
  )
}

export default OrgUserDashBoard
