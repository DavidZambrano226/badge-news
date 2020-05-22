import React from 'react';
import ReactDOM from 'react-dom';

//Components

import App from './components/App'; //maneja las rutas

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//obtenemos el elemento donde vamos a mostrar los componentes
const container = document.getElementById('app');

//// ReactDOM.render(__qué__, __dónde__);

 ReactDOM.render(<App  />, container);
