import "../src/css/main.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Second from "./components/Second";
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Second" element={<Second/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
