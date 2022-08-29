import React, { useState } from "react";

export interface orgNameProps{
  orgName: string,
}


const RaiseTicket = (props:orgNameProps) => {
  // const [cat,setCat]=useState("Technical");
  const [query, setQuery] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();

    setQuery("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>{props.orgName} Ticket Form</h1>
      <div className="details">
        <div>
          <label>select category: </label>
          <select name="category" id="">
            <option value="tech">Technical</option>
            <option value="howto">How To</option>
            <option value="feature">Feature Request</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="enter your query here"
          value={query}
          onChange={(e: any) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RaiseTicket;
