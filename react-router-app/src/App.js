import "./App.css";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// App components
import Home from "./components/Home";
import OurTeam from "./components/OurTeam";
import Projects from "./components/Projects";
import Header from "./components/Header";

const App = () => (
  <div className='container'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home title='Home' />} />
      <Route path='/our-team' element={<OurTeam />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </div>
);

export default App;
