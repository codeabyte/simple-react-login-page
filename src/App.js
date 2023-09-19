import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login.tsx';


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
const App = () => {
  const [token, setToken] = useState(getToken());

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      </div>
  );
};


export default App;
