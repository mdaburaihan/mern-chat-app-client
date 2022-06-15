import logo from './logo.svg';
import './App.css';
import React from 'react';
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
  );
}

export default App;
