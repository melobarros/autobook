import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => (
    <Router>
      <Fragment>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Landing />}/>
        </Routes>
      </Fragment>
    </Router>
  );

export default App;
