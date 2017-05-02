import React from 'react';
import { browserHistory } from "react-router";
import axios from 'axios';
var Link = require ('react-router-dom').Link;

class Login extends React.Component {

    constructor (props) {
        super(props);
        this.state ={
            username: '',
            password: '',
            loginFailed: false
        }
        console.log(this.state);
        this.login = this.login.bind(this);
    }
    login(){
        axios.post("/api/login", {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            this.props.history.push('/');
        })
    }
    render (){
        return(
            <div>
                <div>Login</div>
                <div>Username: <input type="text" onChange={(event) =>{
                this.setState({
                    username : event.target.value
                })}}/></div>

                <div>Password: <input type="password" onChange={(event) => {
                this.setState= ({
                    password: event.target.value
                })
                    console.log(this.state);
                }} /></div>
                <button onClick={this.login}>Login</button>
                <Link to={'/login/register'}>
                    <button >Register</button>
                </Link>


            </div>
        )
    }
}
export default Login;
