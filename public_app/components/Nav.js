import React from 'react';
var NavLink = require('react-router-dom').NavLink;

function Nav (){
    return (
        <div className='NavContainer'>
            <div className='Nav'>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
                <NavLink exact activeClassName='active' to='/all-movies'>
                    All Movies
                </NavLink>
                <NavLink exact activeClassName='active' to='/login/register'>
                    Registration
                </NavLink>
            </div>
        </div>
    )
}
export default Nav;
