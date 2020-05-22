import React from 'react';
import { Link } from "react-router-dom";
//Components

import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';
//Styles
import './styles/Badges.css';
//Images
import ConfLogo from '../images/badge-header.svg';

import Api from '../api';

class Badges extends React.Component{
    
    
    constructor(props){
        super(props);
        console.log("1. Constructor"); 
        this.state = {
            loading:true,
            error:null,
            data:undefined,
        };       
    }
//Ciclo de vida de un componente
    // Se ejecuta siempre una vez se carga el constructor y se renderiza la pagina render() e indica aue el componente esta listo
    componentDidMount(){
        console.log("3. componentDidMount");

        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000);
        
    }
    //Se ejecuta siempre que hay una actualización en el estado de un componente 
    componentDidUpdate(prevProps, prevState){
        console.log("5. componentDidUpdate()");
        console.log(
            {prevProps:prevProps, prevState:prevState}
        );
        console.log({
            props:this.props,
            state:this.state
        });
        
        
        
    }
    //se ejecuta al momento de salir del componente
    componentWillUnmount(){
        console.log("6. componentWillUnmount()");
        //cancelamos la ejecucion del timeout para evitar errores en consola si cambio de pagina antes de que se complete
        
        clearInterval(this.intervalId);
        
    }

    fetchData = async ()=>{
        this.setState({
            loading:true,
            error:null
        })

        try {
            const data = await Api.badges.list();
            this.setState({
                loading:false, 
                data:data
            });
        } catch (error) {
            this.setState({
                loading:false,
                error:error
            })
        }
    }

    render(){
        console.log("2/4. render()");

        if (this.state.loading === true && !this.state.data) {
           return <PageLoading />;
        }

        //manejo de errores
        if (this.state.error) {
            return <PageError error={this.state.error.message} />
        }
        
        return(
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={ConfLogo} alt="Logo Conferencia" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges_list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                            {this.state.loading &&(
                                <MiniLoader />
                            )}

                        </div>
                    </div>
                
                </div>


            </React.Fragment>
        );
    }
}
export default Badges;