import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}


