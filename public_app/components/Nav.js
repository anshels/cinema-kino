import React        from 'react';
import {NavLink}    from 'react-router-dom';

function Nav (){
    return (
        <div className='nav-container'>
            <div className='nav'>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
                <NavLink exact activeClassName='active' to='/all-movies'>
                    All Movies
                </NavLink>
            </div>
        </div>
    )
}
export default Nav;
