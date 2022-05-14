import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'Roboto']
      }
    });
   }, []);

  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
