import React from 'react';
import './stylesheet/Button.css';

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






