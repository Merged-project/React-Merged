import './App.css';
import Button from './components/Button.jsx';
import FormContainer from './components/FormContainer.jsx';






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

      <FormContainer />

    </div>
  );
}

export default App;
