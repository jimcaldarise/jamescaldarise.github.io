import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home'
import Project1 from './Components/pages/Project1'
import Project2 from './Components/pages/Project2'
import Project3 from './Components/pages/Project3'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/project1' element={<Project1 />}/>
            <Route path='/project2' element={<Project2 />}/>
            <Route path='/project3' element={<Project3 />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
