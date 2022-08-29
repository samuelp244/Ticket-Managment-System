import React from 'react'

const RaiseTicket = () => {
  return (
    <form>
        <h1>Company A Ticket Form</h1>
        <div className='details'>
            <label>select Category</label>
            <select name="category" id="">
                <option value="tech">Technical</option>
                <option value="howto">How To</option>
                <option value="feature">Feature Request</option>
            </select>
            <input type="text" placeholder='enter your query'/>
        </div>
    </form>
  )
}

export default RaiseTicket
