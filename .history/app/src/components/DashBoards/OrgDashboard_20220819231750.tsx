import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import './OrgDashBoard.css'

const OrgDashboard = () => {
  const [userName, setUserName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();


  const [addUser,setAddUser] = useState(false);





  const submitHandler = (e: any) => {
    e.preventDefault();
    Axios.post("http://localhost:1337/api/v1/registerUser", {
      username: userName,
      organization: organization,
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res.data.status === "ok") {
        navigate("/orguserdb");
      }
    });

    setUserName("");
    setOrganization("");
    setEmail("");
    setPassword("");
    setConfPassword("");
  };

  return (
    <div>
      {!addUser && butt}
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
          <input
            type="text"
            placeholder="Organization"
            value={organization}
            onChange={(e: any) => {
              setOrganization(e.target.value);
            }}
          />
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
          <button>Cancel</button>
          <button type="submit">Add User</button>
        </div>
        
      </form>
    </div>
  );
};

export default OrgDashboard;
