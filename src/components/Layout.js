import React from 'react';
import NavBar from './NavBar';

function Layout(props){
    //React.Fragnent sirve para evitar tener elementos <div> que no cumplen ninguna funcion
    return (
        <React.Fragment> 
            <NavBar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;