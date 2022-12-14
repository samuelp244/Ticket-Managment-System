import React, { useState } from "react";
import "./LoginComm.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const LogInComm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();

    Axios.post("http://localhost:1337/api/v1/loginUser", {
      email: email,
      password: password,
    }).then((res) => {
      
      if (res.statusText === "OK") {
        if (res.data.status === "ok" && res.data.user === true) {
          if(res.data.role === "customer"){navigate("/commdashboard",{
            state:{
              username:res.data.username,
            }
          })}
          if(res.data.role === "employee"){navigate("/orguserdb",{
            state:{
              username:res.data.username,
            }
          })

          }

        } else {
          alert("Login failed! check password");
        }
      } else {
        console.log("invalid");
      }
    });
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="details">
        <h1>Log In (User)</h1>
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <small>forgot password?</small>
      </div>
      <button>Log In</button>
      <p>
        Don't have an account?<Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default LogInComm;
