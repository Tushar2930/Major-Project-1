import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/header";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
     <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;