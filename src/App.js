import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import BookingPage from './Pages/BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/booking" Component={BookingPage}>
          </Route>
          <Route path="/home" Component={Home}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
