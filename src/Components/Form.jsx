import React from 'react';
import '../stylesheets/Form.css';

function InputContainer(){
    return(
        <form className = 'form'>
            <div>
                <label htmlFor='username'> Username</label>
                <input type= 'text' id='name' name='name' placeholder = 'username'/>
            </div>

            <div>
                <label htmlFor ='email'> email</label>
                <input type = 'email' id='name' name='name' placeholder = 'email'/>
            </div>

            <button type = 'submit'>Login</button>
        </form>
    );
}

export default InputContainer;

