import React, {Component} from 'react';
import Logo from "../assets/images/login-logo.png"
import "./styles.scss";
import {NavLink, RegButton} from "./pageStyles"
import {db_url} from "../App"
import Axios from 'axios'

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

class SignIn extends Component {
    constructor(props){
        super(props);
        


        this.state = {
            username : null,
            password : null,
            formErrors:{
                username: "",
                password: "",
            }
        };
    }


    handleSubmit = e => {
        console.log("prop auth value :",this.props.Auth)

        e.preventDefault();

        if(formValid(this.state)){
            // console.log(`
            //     ---SUBMITTING---
            //     username: ${this.state.username}
            //     password: ${this.state.password}
            // `)
            //alert("We are currently working on. Please wait for further updates..")
            const req_url = db_url+'/api/userPassword'
            //console.log("username state is :",this.state.username);
            Axios.post(req_url,{
                    u_name: this.state.username
                }).then((res) => {
                    //console.log("res is:",res)
                    //console.log("res data is:",res.data.result.length)
                    if(res.data.data === "Success")
                    {
                        if(res.data.result.length == 0)
                        {
                            alert("Username does not exist please try again!");
                        }
                        else{
                            if(this.state.password === res.data.result[0].password)
                            {
                                this.props.setAuth();
                                console.log("prop now is:", this.props.Auth)
                                this.props.history.push('/home');
                            }
                            else{
                                alert("Password id incorrect please try again!");
                            }
                        }
                    }
                    else{
                        alert("Error while trying to login:"+res.data.error);
                    }
                    
                    
                })
        }
        else
        {
            alert("Either username or password is empty or incorrect. Please Check..")
            //console.error('FORM INVALID -- DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
        console.log("entered change signIn")

        e.preventDefault();

        const { name,value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name)
        {
            case 'username':
                formErrors.username = value.length < 2 
                                    ? "minimum 2 characters required" 
                                    : "";
                break;
            case 'password':
                formErrors.password = value.length < 5
                                    ? "password too short"
                                    : "";
                break;
            default:
                break;
        }

        this.setState({formErrors,[name]:value}, () => console.log(this.state))

    }

    render(){
        const { formErrors } = this.state;
    return (
        <div className = "base-container" height = '100'>
        <div className = "header">Login</div>
        <div className="image">
            <img src={ Logo } alt=""/>
        </div>
        <form onSubmit = {this.handleSubmit}>
            <div className = "form">
                <div className = "form-group">
                    <label htmlFor="username">Username : </label>
                    <input 
                        className = {formErrors.username.length > 0 ? "error" : null}
                        type = "text" 
                        name = "username" 
                        placeholder="username"
                        noValidate
                        onChange = {this.handleChange}/>
                    {formErrors.username.length > 0 && (
                    <small><span className = "errorMessage">{formErrors.username}</span></small>
                    )}
                </div>
                <div className = "form-group">
                    <label htmlFor="password">Password : </label>
                    <input 
                        className = {formErrors.password.length > 0 ? "errorMessage" : null}
                        type = "password" 
                        name = "password" 
                        placeholder="password"
                        noValidate
                        onChange = {this.handleChange}/>
                    {formErrors.password.length > 0 && (
                    <small><span className = "errorMessage">{formErrors.password}</span></small>
                    )}
                </div>
            </div>
            <div className = "form-group">
                    <RegButton type = "submit" className = "">Sign-In</RegButton>
                    <NavLink to="/register" activeStyle={{}}>Not Registered yet? Click here to register.</NavLink>
                </div>
        </form>
        </div>
    );}     
}

export default SignIn;
