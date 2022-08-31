import Axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'

export interface locationState{
  state:{
    username:string,
  }
}

export interface ticketstate{
  category:string,
  organizationName: string,
  publishedAt: string,
  query: string,
  status: string,
  username: string,
  _id: string,
}

const OrgUserDashBoard = () => {

  const [tickets,setTickets] = useState<ticketstate[]>();


  const location= useLocation() as locationState

  useEffect(() => {
    Axios.get(`http://localhost:1337/api/v1/getAllEmployees?username=${location.state.username}`).then((res)=>{
      console.log(res);
    })
    
    
  },[location])

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
