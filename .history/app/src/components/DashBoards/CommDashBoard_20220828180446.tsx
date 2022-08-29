import React from 'react'
import RaiseTicket from '../forms/CustomerForms/RaiseTicket'

const CommDashBoard = () => {
  return (
    <div>
      <h1>Community DashBoard</h1>
      <div>
        Companies:
        <ul>
          <li>A</li>
          <li>B</li>
          <RaiseTicket/>
          
        </ul>
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
