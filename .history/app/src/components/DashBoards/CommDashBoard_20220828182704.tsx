import React from 'react'
import RaiseTicket from '../forms/CustomerForms/RaiseTicket'

const CommDashBoard = () => {
  return (
    <div>
      <h1>Community DashBoard</h1>
      <div>
        Companies:
        <ul>
          <button>Comp A</button>
          <br />
          <button>Comp B</button>
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
