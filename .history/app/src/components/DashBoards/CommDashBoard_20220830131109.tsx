import React,{ useState, useEffect} from 'react'
import RaiseTicket from '../forms/CustomerForms/RaiseTicket'
import OrgList from '../others/OrgList'
import {useLocation } from 'react-router-dom'
import Axios from 'axios'

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

  },[location])

  



  return (
    <div>
      <h1>Community DashBoard</h1>
      <div>
        Companies:
        <OrgList orgButtonHandler={orgButtonHandler}/>
        {selectedOrg !==""?<RaiseTicket orgName={selectedOrg} username={location.state.username}/>:null}
      </div>
      <div>
        tickets:
        <ul>{tickets?.filter(obj=>obj.status === "Active").map((val)=>
          <div>Company-{val.organizationName}<br/>{val.category}-{val.query}</div>
        )}
        </ul>
        <ul>{tickets?.filter(obj=>obj.status === "Accepted").map((val)=>
          <div>{val.query}</div>
        )}
        </ul>
        <ul>{tickets?.filter(obj=>obj.status === "Closed").map((val)=>
          <div>{val.query}</div>
        )}
        </ul>
      </div>
      
    </div>
  )
}

export default CommDashBoard
