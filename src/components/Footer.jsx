import React from 'react';
import '../stylesheets/Footer.css';

const Footer = () => {
    return(
    <div className='footer-container'>
    
    <img className="olasrosas" src={require('../img/olasrosas.png')} alt="olasrosas"/>

    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos nisi molestiae voluptas eum explicabo omnis, neque ducimus, ea inventore earum suscipit expedita. Provident sequi dolorum quaerat officia, nemo eum.</p>

    <div className="icons">
    <img src={require('../img/instagram.png')} alt="instagram" />
    <img src={require('../img/youtube.png')} alt="youtube" />
    <img src={require('../img/email.png')} alt="email" />
    <img src={require('../img/text.png')} alt="text" />
    </div>
    </div>
    );

}

export default Footer;