import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Links } from 'react-router-dom';
import React, { Component } from 'react';
import ArtistList from './components/ArtistList';
import FestivalCard from './components/FestivalCard';
import Footer from './components/Footer.jsx';
import Gigcard from './components/GigCard';
import Register from './views/Register';
import Button from './components/Button';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <div className="App">
      <Router>

        <Link to= "/">Home</Link> <br/>
        <Link to= "/calendar">Calendar</Link> <br/>
        <Link to= "/eventlist">Events List</Link> <br/>
        <Link to= "/register">Register</Link>

        <Routes>
          <Route path="/" element="{ <ComponentTest /> }" />
          <Route path="/calendar" element="{ <Calendar /> }" />
          <Route path="/eventList" element="{ <EventList /> }" />
          <Route path="/register" element="{ <Register /> }" />
        </Routes>

      </Router>

    <Register/>
      <Footer/>
      

    </div>
  );
  }
export default App;
