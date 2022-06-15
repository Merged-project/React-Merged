import React from 'react';
import Register from '../components/Register.jsx';
import {FaArrowLeft} from 'react-icons/fa';
import '../stylesheets/Register.css';
import '../stylesheets/RegisterView.css';
import { BrowserRouter, Router,Link, Links,Routes, Route} from 'react-router-dom';



function Login (){
    return( 
        <>
            <section className='login-container'>
                
                <Register/>
                <p className ='unregistered-text'>already registered?</p>
                <a>
                    <Link to='/login'>
                        <p className ='register-here-text'>LOGIN HERE</p>
                    </Link>
                </a>
                
                <a>
                    <Link to='/login'>
                        <FaArrowLeft className='arrow-icon'/>
                    </Link>
                </a>
            </section>
        </>

        
    );
}

export default Login;