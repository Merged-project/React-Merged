import React from "react";
import '../stylesheets/GigCard.css';

const Gigcard = () => {
    return (
        <div className="container">

            <img className="image" src={require('../img/dualipa.png')} alt="artist" />
            <div className="info">
                <p className="artist">Dualipa</p>
                <p className="date">25/06/1997</p>
            </div>
        </div>
    );
}

export default Gigcard;


