import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Links } from 'react-router-dom';
import ArtistList from './components/ArtistList';
import FestivalCard from './components/FestivalCard';
import Footer from './components/Footer.jsx'
import Gigcard from './components/GigCard';
import Button from './components/Button';
import FormContainer from './components/FormContainer';
import Home from './views/Home';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      },1000)
    },[])

  return (
    <div className="App">
      {loading ? 
      <Landing
      loading = {loading}/> 
      : <Home/>}
      <Navbar></Navbar>
      <BrowserRouter>
        <header > 
          <Link to='/' ></Link>
          <Link to='/login'></Link>
          <Link to='/register'></Link>
          <Link to='/landing'></Link>
        </header>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/calendar" element="{ <Calendar /> }" />
          <Route path="/eventList" element="{ <EventList /> }" />
        </Routes>

      </Router>

    
    </div>
    
  );
}

export default App;

