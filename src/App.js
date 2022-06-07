import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Links } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import Arrow from './components/Arrow';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to= "/">Home</Link> <br/>
      <Link to= "/calendar">Calendar</Link> <br/>
      <Link to= "/eventlist">Events List</Link> <br/>

        <Routes>
          <Route path="/" element="{ <ComponentTest /> }" />
          <Route path="/calendar" element="{ <Calendar /> }" />
          <Route path="/eventList" element="{ <EventList /> }" />
        </Routes>
      </Router>
      <Footer/>
      

    </div>
  );
}

export default App;
