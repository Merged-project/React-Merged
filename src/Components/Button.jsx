import React from 'react';
import '../stylesheets/Button.css';

function Button({ text, manageClick }){
    return(
        <button 
            clasName="button" 
            onClick={manageClick}>
            {text}
        </button>
    );
}

export default Button;






