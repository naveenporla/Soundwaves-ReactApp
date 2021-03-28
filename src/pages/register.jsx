import React, {Component} from 'react';
import "./styles.scss";
import {NavLink, RegButton} from "./pageStyles"

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
};

class Register extends Component {
    constructor(props){
        super(props);


        this.state = {
            Name: null,
            Mobile: null,
            Email: null,
            Password: null,
            Age: null,
            formErrors:{
                Name: "",
                Mobile: "",
                Email: "",
                Password: "",
                Age: ""
            }

        };
    }

    handleSubmit = e => {
        console.log("entered--------")

        e.preventDefault();

        if(formValid(this.state)){
            console.log(`
                -- SUBMITTING--
                Name: ${this.state.Name}
                Mobile: ${this.state.Mobile}
                mail: ${this.state.Email}
                password: $(this.state.Password)
                Age: ${this.state.Age}
            `) 
            alert("Successfully Registered. Wait for login updates..")
        }
        else 
        {
            alert("Some fields are missing or incorrect. Please check..")
            console.error('FORM INVALID -- DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name,value } = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case 'Name':
                formErrors.Name = value.length < 2 
                                    ? "minimum 2 characters required" 
                                    : "";
                break;
            case 'Mobile':
                formErrors.Mobile = value.length === 10
                                    ? ""
                                    : "exact 10 characters required";
                break;
            case 'Email':
                formErrors.Email =  emailRegex.test(value)
                                    ? "" 
                                    : 'invalid email address';
                break;
            case 'Password':
                formErrors.Password = value.length < 6 
                                        ? "minimum 6 characters required"
                                        :"";
                break; 
            case 'Age':
                formErrors.Age = value.length === 0
                                 ? "enter age"
                                 : "";
                break;
            default:
                break;
        }

        this.setState({formErrors,[name]:value}, () => console.log(this.state))

    }

    render() {
        const { formErrors } = this.state; 
    return (
        <div className = "base-container" height = '100'>
        <div className = "header">Register</div>
        <form onSubmit = {this.handleSubmit}>
            <div className = "form">
                <div className = "form-group">
                    <label htmlFor="name">Name : </label>
                    <input 
                        className = {formErrors.Name.length > 0 ? "error" : null}
                        type = "text" 
                        name = "Name" 
                        placeholder="Name" 
                        noValidate
                        onChange = {this.handleChange} />
                    {formErrors.Name.length > 0 && (
                    <small><span className = "errorMessage">{formErrors.Name}</span></small>
                )}
                </div>
                <div className = "form-group">
                    <label htmlFor="mobile">Mobile number : </label>
                    <input 
                        className = {formErrors.Mobile.length > 0 ? "error" : null}
                        type = "Number" 
                        name = "Mobile" 
                        placeholder="xxx-xxx-xxxx"
                        noValidate
                        onChange = {this.handleChange} />
                    {formErrors.Name.length > 0 && (
                    <small><span className = "errorMessage">{formErrors.Mobile}</span></small>
                )}
                </div>
                <div className = "form-group">
                    <label htmlFor="email">Email id : </label>
                    <input 
                        className = {formErrors.Email.length > 0 ? "error" : null}
                        type = "email" 
                        name = "Email" 
                        placeholder="xxxx@xxxx.com"
                        noValidate
                        onChange = {this.handleChange} />
                    {formErrors.Name.length > 0 && (
                    <small><span className = "errorMessage">{formErrors.Email}</span></small>
                )}
                <div className = "form-group">
                    <label htmlFor="Password">Password : </label>
                    <input 
                        className = {formErrors.Password.length > 0 ? "error" : null}
                        type = "Password" 
                        name = "Password" 
                        noValidate
                        onChange = {this.handleChange} />
                    {formErrors.Password.length > 0 && (
                    <small><span className = "errorMessage">{formErrors.Password}</span></small>
                )}
                </div>
                <div className = "form-group">
                    <label htmlFor="age">Age : </label>
                    <input 
                        className = {formErrors.Age.length > 0 ? "error" : null}
                        type = "Number" 
                        name = "Age" 
                        placeholder="age"
                        noValidate
                        onChange = {this.handleChange} />
                </div>
                {formErrors.Name.length > 0 && (
                <small><span className = "errorMessage">{formErrors.Age}</span></small>
                )}
            </div>
            <div className = "form-group">
                    <RegButton type = "submit" className = "">Register</RegButton>
                    <NavLink to="/sign-in" activeStyle={{}}>Already Registered? Click here to sign-in.</NavLink>
                </div>
        </div>
        </form>
        </div>
    );
}
        
}

export default Register;