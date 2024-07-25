import React from 'react';
import "./App.css";
import {Routes,Route} from "react-router-dom";
// import Login from "./Component/Login";
import Home from "./Component/Home/Home";


function App(){
  return(
    <>
    <Routes>
      {/* <Route path="/Login" Component={Login} /> */}
      <Route path="/home" Component={Home} />
      

    </Routes>
    </>
  )
}

export default App;