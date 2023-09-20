import React from 'react'
import {Route, Link} from "react-router-dom";
import AppNavbar from './components/Navbar'
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className="container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
