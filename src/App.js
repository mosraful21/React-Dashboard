import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home.js';
import Explore from './Pages/Explore';
import Saved from './Pages/Saved';
import Cart from './Pages/Cart';
import Selling from './Pages/Selling';
import Profile from './Pages/Profile';
import History from './Pages/History';
import Contact from './Pages/Contact';
import Setting from './Pages/Setting';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/selling' element={<Selling />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/history' element={<History />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;