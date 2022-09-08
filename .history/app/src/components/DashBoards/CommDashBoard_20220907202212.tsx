import React,{ useState, useEffect} from 'react'
import RaiseTicket from '../forms/CustomerForms/RaiseTicket'
import OrgList from '../others/OrgList'
import {useLocation } from 'react-router-dom'
import Axios from 'axios'

import './CommDashboard.css'

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




const CommDashBoard = () => {
  const [selectedOrg,setSelectedOrg] = useState("");
  const [tickets,setTickets] = useState<ticketstate[]>();

  const orgButtonHandler = (orgName:string) =>{
    setSelectedOrg(orgName);
  }

  const location= useLocation() as locationState

  useEffect(()=>{
    Axios.get(`http://localhost:1337/api/v1/getUserTickets?username=${location.state.username}`).then((res)=>{
      console.log(res);
      setTickets(res.data.tickets)
    })

  },[location,selectedOrg])

  const closeButtonHandler = (pro) =>{
    Axios.get(`http://localhost:1337/api/v1/closeCustomerTicket?id=${}`).then((res)=>{
      console.log(res);
    })
  }



  return (
    <div>
      <h1>Community DashBoard</h1>
      <div className='org-names-customer'>
        Companies:
        <OrgList orgButtonHandler={orgButtonHandler}/>
        {selectedOrg !==""?<RaiseTicket orgName={selectedOrg} username={location.state.username}/>:null}
      </div>

      <div className="tickets_container">
        
        <div className="active_tickets">
          <ul>{tickets?.filter(obj=>obj.status === "Active").map((val)=>
          <div className='ticket_div'>Company: {val.organizationName}<br/>
          Category: {val.category}<br/>
          query: {val.query}<br/>
          status: {val.status}
          <button onClick={()=>closeButtonHandler(val._id)}>close</button></div>
          )}
          </ul>
        </div>

        <div className="accepted_tickets">
          <ul>{tickets?.filter(obj=>obj.status === "Accepted").map((val)=>
          <div>Company-{val.organizationName}<br/>
          Category-{val.category}<br/>
          query-{val.query}<br/>
          status-{val.status}
          <button>close</button></div>
          )}
          </ul>
        </div>

        <div className="closed_tickets">
          <ul>{tickets?.filter(obj=>obj.status === "Closed").map((val)=>
          <div>Company-{val.organizationName}<br/>
          Category-{val.category}<br/>
          query-{val.query}</div>
          )}
          </ul>
        </div>
        
        
        
      </div>
      
    </div>
  )
}

export default CommDashBoard
