import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import SinglePage from './components/index';
import ExplorePremium from './components/ExplorePremium';
import InstallApp from './components/InstallApp';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/explore-premium" element={<ExplorePremium />} />
          <Route path="/install-app" element={<InstallApp />} />
          <Route path="/homepage" element={<SinglePage />} /> 
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;