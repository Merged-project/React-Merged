import React from 'react';
import landingPic from '../img/landingPic.png';
import '../stylesheets/Landing.css';

function Landing(){
    return(
        <img 
        src={landingPic} 
        alt="landing"
        classname = 'landing-pic' />
    )
;}




export default Landing;