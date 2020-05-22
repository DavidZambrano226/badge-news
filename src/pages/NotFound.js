import React from 'react';
import { Link } from "react-router-dom";

import Astronauta from '../images/img404.webp';
import './styles/NotFound.css';

function NotFound(){
    return(
        <div className="NotFound-container">
            <img className="img_primary" src={Astronauta} alt="AstronautaImage" />
            <h1>404: Not Found</h1>
            <Link to="/" className="btn btn-primary">Go to Home!</Link>
        </div>
    );
}

export default NotFound;