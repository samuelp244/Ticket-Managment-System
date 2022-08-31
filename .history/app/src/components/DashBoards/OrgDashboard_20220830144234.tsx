import React, { useState } from "react";
import { useNavigate,useLocation} from "react-router-dom";
import Axios from "axios";
import "./OrgDashBoard.css";


export interface locationState{
  state:{
    username:string,
  }
}


const OrgDashboard = () => {
  const [userName, setUserName] = useState("");
  const [cat, setCat] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation() as locationState;
 

  const [addUser, setAddUser] = useState(false);

  const startAdding = () => {
    setAddUser(true);
  };
  const stopAdding = () => {
    setAddUser(false);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    Axios.post("http://localhost:1337/api/v1/registerEmployee", {
      username: userName,
      rootUser: location.state.username,
      assignedDomain: ca
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res.data.status === "ok") {
        navigate("/orguserdb");
      }
    });

    setUserName("");
    setCat("Technical");
    setEmail("");
    setPassword("");
    setConfPassword("");
  };

  return (
    <div>
      <h1>Organization Dashboard</h1>
      {/* <h1>{location.state.organization}</h1> */}
      {!addUser && <button onClick={startAdding} className="add-btn">Add User</button>}

      {addUser && (
        <form onSubmit={submitHandler}>
          <h1>Add User</h1>
          <div className="details">
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e: any) => {
                setUserName(e.target.value);
              }}
            />
            <select name="category" id="" value={cat} onChange={(e: any) =>{
             setCat(e.target.value);
            }}>
              <option value="tech">Technical</option>
              <option value="howto">How To</option>
              <option value="feature">Feature Request</option>
            </select>
            <input
              type="text"
              placeholder="Org. Mail"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confPassword}
              onChange={(e: any) => {
                setConfPassword(e.target.value);
              }}
            />
          </div>
          <div className="form_controls">
            <button onClick={stopAdding}>Cancel</button>
            <button type="submit">Add User</button>
          </div>
        </form>
      )}
      <div><button>employee list</button></div>
    </div>
  );
};

export default OrgDashboard;
