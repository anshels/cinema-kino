import React    from 'react';
import axios    from 'axios';
import {Link}   from 'react-router-dom';

class Login extends React.Component {

    constructor (props) {
        super(props);
        this.state ={
            username: '',
            password: '',
            loginFailed: false
        };
        this.login = this.login.bind(this);
    }
    login(){
        axios.post("/api/login", {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            this.props.history.push('/');
        });
    }
    render (){
        return(
            <div className="input-field-form">

                <h1>Login</h1>
                <h3>Registred user only</h3>
                <div className='input-field-container'>
                    <div className='input-field-middle'>
                        <div className="input-field">
                            <input placeholder=" Username" type="text"
                                onChange={ event =>{
                                    this.setState({
                                        username : event.target.value
                                    });
                                }}/></div>

                        <div className="input-field">
                            <input placeholder=" Password" type="password" onChange={(event) => {
                                    this.setState= ({
                                        password: event.target.value
                                    });
                                }} /></div>
                        <button className="login-button" onClick={this.login}>Login</button>
                        <div>
                            <Link to={'/login/register'}>
                                <span>Do not have a account ?</span>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
export default Login;
