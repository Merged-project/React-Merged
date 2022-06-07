import './App.css';
import Button from './components/Button.jsx'
import Form from './components/Form.jsx'




function App() {

  const manageClick = () =>{
    console.log ('click');
  } //aquí escribimosla lógica de la función que queremos que haga

  return (
  <div className='App'>
      <Button
        text='button'
        manageClick = {manageClick} 
      />

      <Form />

      
      
    </div>
  );
}

export default App;
