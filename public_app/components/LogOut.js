import React    from 'react';
import axios    from 'axios';



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
            <div>
                <div className='log-out'>
                    <span  onClick={this.logout.bind(this)}>
                        Logout
                    </span>
                </div>
                <div className='clear-float'></div>
            </div>

        );
    }
}
export default LogOut;
