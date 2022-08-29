import React,{ useState} from 'react'
import RaiseTicket from '../forms/CustomerForms/RaiseTicket'
import OrgList from '../others/OrgList'

const CommDashBoard = () => {
  const [selectedOrg,setSelectedOrg] = useState("");

  const orgButtonHandler = (orgName:string) =>{
    setSelectedOrg(orgName);
  }

  

  



  return (
    <div>
      <h1>Community DashBoard</h1>
      <div>
        Companies:
        {/* <ul>
          <button>Comp A</button>
          <br />
          <button>Comp B</button>
          
        </ul> */}
        <OrgList orgButtonHandler={orgButtonHandler}/>
        {selectedOrg !==""?<RaiseTicket orgName={selectedOrg}/>:null}
      </div>
      <div>
        tickets:
        <ul>
          <li>Raised tickets</li>
          <li>Closed tickets</li>
        </ul>
      </div>
      
    </div>
  )
}

export default CommDashBoard
