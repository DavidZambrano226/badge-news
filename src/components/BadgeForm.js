import React from 'react';
import md5 from 'md5';


class BadgeForm extends React.Component{
    //inicializar el state
    // state = {};

    // handleChange= e =>{

    //     //manejo de estados para almacenar los datos del form
    //     this.setState({ //seteamos el nombre del input y su valor
    //         [e.target.name]: e.target.value
    //     })
        
    // }
    handleClick= e =>{
        
        const hash = md5(this.props.formValues.email);
        this.props.formValues.avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
        
    }
    
    render(){
        return(
            <div>
                
                <form onSubmit={this.props.onSubmit }>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                                type="text" 
                                className="form-control" 
                                name="firstName" 
                                value = {this.props.formValues.firstName} //leemos el nombre del estado
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                                type="text" 
                                className="form-control" 
                                name="lastName" 
                                value = {this.props.formValues.lastName} //leemos el nombre del estado
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                value = {this.props.formValues.email} //leemos el nombre del estado
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} 
                                type="text" 
                                className="form-control" 
                                name="jobTitle" 
                                value = {this.props.formValues.jobTitle} //leemos el nombre del estado
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                                type="text" 
                                className="form-control" 
                                name="twitter" 
                                value = {this.props.formValues.twitter} //leemos el nombre del estado
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error &&(
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>

        )
    }
}

export default BadgeForm;