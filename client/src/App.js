import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/rooms/" element={<Rooms/>}/>
            <Route path="/rooms/:slug" element={<SingleRoom/>} />
            <Route path="/booknow/:slug" element={<Booknow/>} />
            <Route element={Error}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;