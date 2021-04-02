import React, {Component} from 'react';
import "./styles.scss";

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

class ContactUs extends Component {
    constructor(props){
        super(props);


        this.state = {
            Name: null,
            Mobile: null,
            Email: null,
            Query: null,
            formErrors:{
                Name: "",
                Mobile: "",
                Email: "",
                Query: ""
            }

        };
    }

    handleSubmit = e => {
        // console.log("entered--------")

        e.preventDefault();

        if(formValid(this.state)){
            // console.log(`
            //     -- SUBMITTING--
            //     Name: ${this.state.Name}
            //     Mobile: ${this.state.Mobile}
            //     mail: ${this.state.Email}
            //     Query: ${this.state.Query}
            // `)  
            alert("Thank you for submitting your query. We will get back to you ASAP..") 
        }
        else 
        {
            alert("Some fields are missing or incorrect. Please check..")
            // console.error('FORM INVALID -- DISPLAY ERROR MESSAGE');
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
            case 'Query':
                formErrors.Query = value.length === 0
                                 ? "enter Query"
                                 : "";
                break;
            default:
                break;
        }

        this.setState({formErrors,[name]:value}, () => {})

    }

    render() {
        const { formErrors } = this.state; 
    return (
        <div className = "base-container" height = '100'>
        <div className = "header">Contact-Us</div>
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
                    <label htmlFor="mobile">Mobile number </label>
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
                    <label htmlFor="email">Email id </label>
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
                </div>
                <div className = "form-group">
                    <label htmlFor="Query">Query </label>
                    <textarea 
                        className = {formErrors.Query.length > 0 ? "error" : null}
                        type = "Number" 
                        name = "Query" 
                        placeholder="Enter the text here"
                        noValidate
                        onChange = {this.handleChange} ></textarea>
                </div>
                {formErrors.Name.length > 0 && (
                <small><span className = "errorMessage">{formErrors.Query}</span></small>
                )}
            </div>
            <div className = "footer">
            <button type = "submit" className = "btn" >
            Submit
            </button>
            </div>
        </form>
        </div>
    );
}
        
}

export default ContactUs;