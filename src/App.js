
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
// import { useState } from "react";
import React, { useState } from 'react';




function App() {
  const[mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#eded43';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Aroni-Samyuk" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <TextForm heading = "Enter the text here"/>
        <About />
      </div>
    </>
  );
}

export default App;
