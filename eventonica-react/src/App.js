import React, { useEffect } from 'react';
import Eventform from './Eventform';
import logo from './logo.svg';
import './App.css';

function App () {
  const [apiResponse, setAPIResponse] = React.useState("");
  function callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setAPIResponse(res))
          .catch(err => err);
  };
  React.useEffect(() => {
      callAPI();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">{apiResponse}</p>
      <Eventform/>
    </div>
  );
  
}



export default App;