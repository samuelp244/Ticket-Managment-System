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

  const startAdding=()=>{
    setAddUser(true);
  };
  const stopAdding=()=>{
    setAddUser(false);
  };





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
      {!addUser && <button onClick={startAdding}>Add User</button>}

      {addUser && }
      
    </div>
  );
};

export default OrgDashboard;
