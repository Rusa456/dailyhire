import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './route/Home';
import Contact from './route/Contact';
import About from './route/About';
import Project from './route/Project';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './route/Login';
import Signup from './route/Signup';
import Sanicon from './route/Sanicon';
function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/sanicon' element={<Sanicon/>}/>
</Routes>
</>

  );
}

export default App;
