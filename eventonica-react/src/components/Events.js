import React, { useState, useEffect } from "react";

const Events = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [location, setLocation] = useState("")
  // const [events,setEvents] = useState([])
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log({ title, date, location, category });
    //
    let _events={ title, date, location, category }
    // setEvents([...events, { title, date, location, category }])
    
    let result =await fetch('http://localhost:9000/events', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(_events)
    })
    let res = await result.json()
    console.log(res)
  };

  
  return (
    <>
    
      <h2>Welcome to Eventonica!</h2>
      <form
      onSubmit={(e)=>handleSubmit(e)}
      >
        <label>Title
           <input
            value={title}
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>Date
        <input
            value={date}
            type="date"
            onChange={(e) => {
              e.preventDefault();
              setDate(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>Location
        <input
            value={location}
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setLocation(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>Category
        <input
            value={category}
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setCategory(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="submit"></input>
      </form>
    </>
  )       
}


export default Events;