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

  console.log(location.state);
  useEffect(() => {
    Axios.get(`http://localhost:1337/api/v1/getAllTickets?username=${location.state.username}`).then((res)=>{
      console.log(res);
      setTickets(res.data.tickets)
    })
    
    
  },[location])

  const acceptHandler = (id: string) =>{
    Axios.get(`http://localhost:1337/api/v1/acceptTicket?id=${id}&username=${location.state.username}`).then((res)=>{
      setTickets(res.data.tickets)
    })
  }

  const 

  return (
    <div>
      <h1>emp DashBoard</h1>
      <div className='tickets_container'>
        
        <div className="active_tickets">
          Active Tickets
          {tickets?.filter(obj=>obj.status === "Active").map((val)=>
            <div className='ticket_div'>Company-{val.organizationName}<br/>
            Category-{val.category}<br/>
            query-{val.query}
            <button onClick={()=>acceptHandler(val._id)}>accept</button></div>
          )}
        </div>

        <div className="active_tickets">
          Accept Tickets
          {tickets?.filter(obj=>obj.status === "Accepted").map((val)=>
            <div className='ticket_div'>Company-{val.organizationName}<br/>
            Category-{val.category}<br/>
            query-{val.query}
            <button onClick={()=>closeHandler(val._id)}>close</button></div>
          )}
        </div>

        <div className="active_tickets">
          closed Tickets
          {tickets?.filter(obj=>obj.status === "Closed").map((val)=>
            <div className='ticket_div'>Company-{val.organizationName}<br/>
            Category-{val.category}<br/>
            query-{val.query}</div>
          )}
        </div>
        
      </div>
      
    </div>
  )
}

export default OrgUserDashBoard
