import React from 'react';
import Events from './components/Events';
import Users from './components/Users';
import './App.css';

function App () {
  const [setAPIResponse] = React.useState("");
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
      <Events />
      <Users />
    </div>
  );
  
}



export default App;