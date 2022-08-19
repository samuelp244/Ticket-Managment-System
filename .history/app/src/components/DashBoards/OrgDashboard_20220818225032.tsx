import React from 'react'

const OrgDashboard = () => {
  return (
    <div>
      org dashboard
      <form>
        <div className="details">
          <input type="text" placeholder='User Name' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='Organization' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='Org' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='User Name' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
          <input type="text" placeholder='User Name' onChange={(e:any)=>{
            console.log(e.target.value);
          }}/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default OrgDashboard
