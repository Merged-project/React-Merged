import React from 'react';
import '../stylesheets/Footer.css';
import { ReactDOM } from 'react';
import olasrosas from './img/olasrosas.png';

const Footer = () => {
    return(
    <>
    <div className="olasrosas">
    <img src={olasrosas} alt="olas"/>;
    </div>
    <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos nisi molestiae voluptas eum explicabo omnis, neque ducimus, ea inventore earum suscipit expedita. Provident sequi dolorum quaerat officia, nemo eum.</p>
    </div>
    <div className="icons">

    </div>
    </>
    );

}

export default Footer;