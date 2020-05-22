import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './styles/Home.css';
//images
import PlatziConf from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg';

class Home extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="Home">
                    <div className="container">
                        <div className="row">
                            <div className="Home__col col-6">
                                <img src={PlatziConf} alt="LogoPlatziConf" className="img-fluid p-2" />
                                <h1 className="home-title">PRINT YOUR BADGES</h1>
                                <p>The easiest way to manage your conference</p>
                                <Link to="/badges" className="btn btn-primary">Start Now</Link>
                            </div>
                            <div className="Home__col col-6">
                            <img src={Astronauts} alt="LogoAstronauts" className="img-fluid p-4" />

                            </div>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Home;