import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Lexer from './components/Lexer'
import Dashboard from './components/Dashboard'
import Lexstake from './components/Lexstake'
import Liquidity from './components/Liquidity';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Lexer/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/lexstake" element={<Lexstake/>}/>
        <Route path="/liquidity" element={<Liquidity/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
