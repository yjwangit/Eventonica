import React, { useState, useEffect } from "react";

const Users = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, firstname, lastname, email });
}
  useEffect(() => {
    async function fetchData() {
      let result = await fetch('http://localhost:9000/events')
      let res = await result.json()
      console.log(res)
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Sign up</h2>
      <form
        onSubmit={e => handleSubmit(e)}
      >
        <label>Username</label>
        <input
          value={username}
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}  
        />
        <br />
        <br/>
        <label>First name</label>
        <input
          value={firstname}
          type="text"
          onChange={(e) => {
            console.log(e)
            e.preventDefault();
            setFirstname(e.target.value);
          }}  
        />
        <br />
        <br />
        <label>Last name</label>
        <input
          value={lastname}
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setLastname(e.target.value);
          }}  
        />
        <br />
        <br />
        <label>E-mail</label>
        <input
          value={email}
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}  
        />
        <br/>
        <br/>
        <input value="submit" type="submit"/>
        
      </form>
        
    </>
    
  )

}

export default Users



