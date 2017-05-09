import React    from 'react';
import axios    from 'axios';
import { Link}  from "react-router-dom";

class Register extends React.Component {

    constructor (props) {
        super(props);
        this.state ={
            username: '',
            password: '',
            registerError: false
        }
        this.register = this.register.bind(this);
    }
    register(){
        axios.post("/api/login/register", {
            username: this.state.username,
            password: this.state.password
        }).then( res => {
            this.props.history.push('/login');
        }).catch( error => {
            console.log(error);
            this.setState({
                registerError: true
            })
        })

    }
    render (){
        const registerError = this.state.registerError;
        return(
            <div className="input-field-form">
                <h1>Registration</h1>
                <h3>Please fill input fields below !</h3>
                <div className='input-field-container'>
                    <div className='input-field-middle'>
                        {registerError ?
                            <div className='login-error'>
                                Username already exists !
                            </div>
                            :
                            <div></div>
                        }
                        <div className="input-field"><input placeholder=' Username' type="text" onChange={ event  =>{
                                    this.setState({
                                        username : event.target.value
                                    })
                                }}/></div>
                        <div className="input-field"><input placeholder=' Password' type="password" onChange={ event => {
                                    this.setState({
                                        password: event.target.value
                                    })
                                }} /></div>
                        <button className="login-button" onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;
