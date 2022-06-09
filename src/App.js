import './App.css';
import { BrowserRouter, Router,Link, Links,Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/RegisterView';
import './stylesheets/Login.css';

// import FormContainer from './components/FormContainer';



function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <header > 
        <Link to='/' ></Link>
        <Link to='/login'></Link>
        <Link to='/register'></Link>
      </header>

      <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/login" element={ <Login />} />
          <Route exact path="/register" element={ <Register />} />
  
        </Routes>


      </BrowserRouter>


    </div>
    
  );
}

export default App;
