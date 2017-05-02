import React from 'react';
import { Link, browserHistory } from "react-router";
import axios from 'axios';


class Register extends React.Component {

    constructor (props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        }
        console.log(this.state);
        this.register = this.register.bind(this);
    }
    register(){
        axios.post("/api/login/register", {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            this.props.history.push('/login');
        })

    }
    render (){
        return(
            <div>
                <div>Registration</div>
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
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default Register;
