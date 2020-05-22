import React from 'react';
import './styles/BadgeNew.css';
//components

import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading.js';


//API
import api from '../api';


class BadgeNew extends React.Component{
    state = {
        loading:false,
        error:null,
        form: {
            firstName:'',
            lastName:'',
            email:'',
            avatarUrl:'',
            jobTitle:'',
            twitter:''
        } 
    };

    handleChange = e =>{
        //agregar todo los campos del form en el state
        // const nextForm = this.state.form; //asignamos valor actual del estado del form
        // nextForm[e.target.name] = e.target.value; //asignamos el valor nuevo del form
        // this.setState({
        //     form:nextForm
        // })
        
        this.setState({
            form:{
                ...this.state.form, //agregamos todos los valores que tenia el form
                [e.target.name]:e.target.value //agregamos los nuevos valores del form
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({loading:true, error:null})
        try {
            //POST to API
            await api.badges.create(this.state.form);
            this.setState({loading:false})
            //rediriir al usuario a badges
            this.props.history.push('/badges');

        } catch (error) {
            this.setState({loading:false, error:error})
            
        }
    }

    render(){
        if (this.state.loading) {
            return(
                <PageLoading />
            )
        }
        return(
           <React.Fragment>
               
               <div className="BadgeNew__hero">
                   <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo" />
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                           <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'YOUR_TWITTER'} 
                                email ={this.state.form.email}
                            />
                       </div>
                       <div className="col-6">
                            <h1>New Attendant</h1>
                           <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                       </div>
                   </div>
               </div>

           </React.Fragment>
        )
    }
}

export default BadgeNew;