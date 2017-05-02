import React    from 'react';
import BigImg   from '../components/BigImg';
import Nav      from '../components/Nav';
var Link = require ('react-router-dom').Link;
import LogOut    from '../components/LogOut';

class Home extends React.Component {
    render (){
        return (
            <div>
                <Link to={'/login'}>
                    <LogOut />
                </Link>
                <Nav />
                <h1> Here will be movies soon</h1>
                <BigImg />
            </div>
        )
    }
}
export default Home;
