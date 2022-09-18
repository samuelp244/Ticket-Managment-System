import React, { useState, useEffect } from "react";
import RaiseTicket from "../forms/CustomerForms/RaiseTicket";
import OrgList from "../others/OrgList";
import { useLocation,useNavigate } from "react-router-dom";
import Axios from "axios";
import { CgProfile } from "react-icons/cg";

import "./CommDashboard.css";

export interface locationState {
  state: {
    username: string;
  };
}

export interface ticketstate {
  category: string;
  organizationName: string;
  publishedAt: string;
  query: string;
  status: string;
  username: string;
  _id: string;
}

interface dashboardProps{
  loggedOut:()=>void
}

const CommDashBoard = (props:dashboardProps) => {
  const [selectedOrg, setSelectedOrg] = useState("");
  const [tickets, setTickets] = useState<ticketstate[]>();
  //profile edit
  const [editProfile, setEditProfile] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const orgButtonHandler = (orgName: string) => {
    setSelectedOrg(orgName);
  };

  const startEdit = () => {
    setEditProfile(true);
  };
  const stopEdit = () => {
    setEditProfile(false);
  };
  
  const location = useLocation() as locationState;
  const navigate = useNavigate();
  useEffect(()=>{
    if(location.state === null) navigate("/login")
  },[location,navigate])

  useEffect(() => {
    Axios.get(
      `http://localhost:1337/api/v1/getUserTickets?username=${location.state?.username}`
    ).then((res) => {
      setTickets(res.data.tickets);
    });
  }, [location, selectedOrg]);

  const closeButtonHandler = (id: string) => {
    Axios.get(`http://localhost:1337/api/v1/closeCustomerTicket?id=${id}`).then(
      (res) => {
        console.log(res.data);
        setTickets(res.data.tickets);
      }
    );
  };

  const profileEditHandler = (e: any) => {
    e.preventDefault();
    // console.log(Obj)
    Axios.put("http://localhost:1337/api/v1/editCustomer", {
      username: location.state?.username, //fixed
      email: newEmail,
      phone: newPhone,
    }).then((res) => {
      console.log(res);
      setNewEmail("");
      setNewPhone("");
    });
  };
  
  const LogoutHandler = ()=>{
    props.loggedOut()
    navigate('/login')
  }
  return (
<>{
(localStorage.getItem("userLoggedIn")==="true")?
    <div>
      <div className="commdash_header">
        <h1>Community DashBoard</h1>
        <h4>
          {!editProfile && <CgProfile onClick={startEdit} />}{" "}
          {location.state?.username}
          <button onClick={()=>{
            LogoutHandler()
            }}>Logout</button>
        </h4>
        
      </div>

      {editProfile && (
        <form onSubmit={profileEditHandler}>
          <h1>Edit profile</h1>
          <div className="details">
            username: {location.state?.username}
            <input
              type="email"
              placeholder="enter your email address"
              value={newEmail}
              required
              onChange={(e: any) => {
                setNewEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter your contact number"
              value={newPhone}
              required
              onChange={(e: any) => {
                setNewPhone(e.target.value);
              }}
            />
          </div>
          <div className="form_controls">
            <button onClick={stopEdit}>cancel</button>
            <button type="submit">save</button>
          </div>
        </form>
      )}

      <hr />
      <div className="org-names-customer">
        <h3>Companies:</h3>
        <OrgList orgButtonHandler={orgButtonHandler} />
        {selectedOrg !== "" ? (
          <RaiseTicket
            orgName={selectedOrg}
            username={location.state?.username}
          />
        ) : null}
      </div>
      <hr />
      <h3>Tickets:</h3>

      <div className="tickets_container">
        <div className="active_tickets">
          <div className="ticket_header">
            <div>Active Tickets</div>
            <div className="ticket_count">
              {tickets?.filter((obj) => obj.status === "Active").length}
            </div>
          </div>

          <hr />

          {tickets?.filter((obj) => obj.status === "Active").length !== 0 ? (
            tickets
              ?.filter((obj) => obj.status === "Active")
              .map((val) => (
                <div className="ticket_div">
                  Company-{val.organizationName}
                  <br />
                  Category-{val.category}
                  <br />
                  query-{val.query}
                  <div className="ticket_buttons">
                    <button onClick={() => closeButtonHandler(val._id)}>
                      close
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <p>none found</p>
          )}
        </div>

        <div className="accepted_tickets">
          <div className="ticket_header">
            <div>Accepted Tickets</div>
            <div className="ticket_count">
              {tickets?.filter((obj) => obj.status === "Accepted").length}
            </div>
          </div>

          <hr />
          {tickets?.filter((obj) => obj.status === "Accepted").length !== 0 ? (
            tickets
              ?.filter((obj) => obj.status === "Accepted")
              .map((val) => (
                <div className="ticket_div">
                  Company-{val.organizationName}
                  <br />
                  Category-{val.category}
                  <br />
                  query-{val.query}
                  <div className="ticket_buttons">
                    <button onClick={() => closeButtonHandler(val._id)}>
                      close
                    </button>
                    <button>Chat</button>
                  </div>
                </div>
              ))
          ) : (
            <p>none found</p>
          )}
        </div>

        <div className="closed_tickets">
          <div className="ticket_header">
            <div>Closed Tickets</div>
            <div className="ticket_count">
              {tickets?.filter((obj) => obj.status === "closed").length}
            </div>
          </div>

          <hr />
          {tickets?.filter((obj) => obj.status === "closed").length !== 0 ? (
            tickets
              ?.filter((obj) => obj.status === "closed")
              .map((val) => (
                <div className="ticket_div">
                  Company-{val.organizationName}
                  <br />
                  Category-{val.category}
                  <br />
                  query-{val.query}
                  <div className="ticket_buttons"></div>
                </div>
              ))
          ) : (
            <p>none found</p>
          )}
        </div>
      </div>
    </div>:null}</>
  );
};

export default CommDashBoard;
