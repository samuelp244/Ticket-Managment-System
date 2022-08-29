import React,{ useState} from 'react'

const RaiseTicket = () => {

    const submitHandler=(e:any)=>{
        e.preventDe
    };




  return (
    <form onSubmit={submitHandler}>
        <h1>Company A Ticket Form</h1>
        <div className='details'>
            <div>
                <label>select category: </label>
                <select name="category" id="">
                    <option value="tech">Technical</option>
                    <option value="howto">How To</option>
                    <option value="feature">Feature Request</option>
                </select>
            </div>
            
            <input type="text" placeholder='enter your query here'/>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default RaiseTicket
