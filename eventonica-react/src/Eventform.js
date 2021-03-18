import React, { useState } from "react";

function Eventform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  console.log('user');

  return (
    <>
      <label>
        Name:
        <input
          name="name"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
      </label>
      <br />
      <br />
    
    
      <label>
        Email:
        <input
          name="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }} />
      </label>
      
      <br />
      <br />
      
      <label>
        Location:
        <input
          name="location"
          value={location}
          onChange={(e) => { setLocation(e.target.value); }} />
      </label>
            
    </>

  );
}

export default Eventform;
