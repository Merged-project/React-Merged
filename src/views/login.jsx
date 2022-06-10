import React from 'react';
import FormContainer from '../components/FormContainer.jsx';
import {FaArrowLeft} from 'react-icons/fa';
import '../stylesheets/Login.css';
import { BrowserRouter, Router,Link, Links,Routes, Route} from 'react-router-dom';
import Logo from '../img/logo.png';


function Login (){
    return( 
        <>
            <section className='login-container'>
                <img className = 'logo' src = {Logo}></img>
                <FormContainer/>
                <p className ='unregistered-text'>unregistered?</p>
                <a>
                    <Link to='/register'>
                        <p className ='register-here-text'>REGISTER HERE</p>
                    </Link>
                </a>
                
                <a>
                    <Link to='/home'>
                        <FaArrowLeft className='arrow-icon'/>
                    </Link>
                </a>
            </section>
        </>

        
    );
}

export default Login;