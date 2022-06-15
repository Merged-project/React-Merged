import React from 'react';
import '../stylesheets/Register.css';
import Button from '../components/Button.jsx';

function Register(){

    return(
        <form className = 'form' >
            <div>
                <img className="image" src={require('../img/picprofile.png')} alt="artist" />
            </div>
            <div>
                    <input 
                        type= 'text' 
                        id='name' 
                        name='name' 
                        placeholder = 'URL profile pic'
                    />
            </div>
            <div>
                    <input 
                        type= 'text' 
                        id='name' 
                        name='name' 
                        placeholder = 'username'
                    />
            </div>

            <div>
                    <input 
                        type = 'email' 
                        id='name' 
                        name='name' 
                        placeholder = 'email'
                    /> 
            </div>
            <div>
                    <input 
                        type= 'text' 
                        id='name' 
                        name='name' 
                        placeholder = 'password'
                    />
            </div>
            <div>
                    <input 
                        type= 'text' 
                        id='name' 
                        name='name' 
                        placeholder = 'confirm password'
                    />
            </div>
            <Button 
            type = 'submit' 
            text='REGISTER'/>
        </form>
    
    );
    
}

export default Register;
