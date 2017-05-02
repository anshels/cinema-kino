import React from 'react';
import axios from 'axios';



class LogOut extends React.Component {
    constructor (props) {
        super(props);
    }
    logout() {
        axios.post("/api/login/logout", {
            username: "admin"
        });
    }

    render (){
        return (
            <div className="log-out">
                <span className="log-out" onClick={this.logout.bind(this)}>
                    Logout
                </span>

            </div>

        );
    }
}
export default LogOut;
