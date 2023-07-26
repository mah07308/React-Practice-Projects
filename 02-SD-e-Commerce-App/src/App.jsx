import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
