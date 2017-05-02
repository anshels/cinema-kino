import React from 'react';
import Nav   from '../components/Nav';
import LogOut    from '../components/LogOut';
var Link = require ('react-router-dom').Link;

class AllMovies extends React.Component {
    render (){
        return (
            <div className="all-movies-container">
                <Link to={'/login'}>
                    <LogOut />
                </Link>
                <Nav />
                Test
            </div>
        );
    }
}
export default AllMovies;
