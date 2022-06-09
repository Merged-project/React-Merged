import './App.css';
import { BrowserRouter, Router,Link, Links,Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
// import FormContainer from './components/FormContainer';



function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <header > 
        <Link to='/' >Home</Link>
        <Link to='/login'>Login</Link>
      </header>

      <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/login" element={ <Login />} />
  
        </Routes>


      </BrowserRouter>


    </div>
    
  );
}

export default App;
