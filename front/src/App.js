// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/layout/Footer';
import Header from './components/layout/Header';
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
