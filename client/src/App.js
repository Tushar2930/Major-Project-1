import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/user/login" element={<Login/>}/>
     <Route exact path="/user/sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;