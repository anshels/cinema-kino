import React        from 'react';
import axios        from 'axios';
import Nav          from '../components/Nav';
import LogOut       from '../components/LogOut';
import MovieItem    from '../components/MovieItem';
import {Link}       from 'react-router-dom';
import {getMovies}  from '../services/getData';

class AllMovies extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: []
        };
        getMovies(response => {
            this.setState({
                items: response.data
            });
        })
    }
    render (){
        return (
            <div className="all-movies-container">
                <Link to={'/login'}>
                    <LogOut />
                </Link>
                <div className='logo-header'>Cinema Star</div>
                <Nav />
                <div className="">
                    <div className='all-img-view'>
                        {this.state.items.map((item) =><MovieItem key={item._id} id={item._id} src={item.Poster}/>
                         )}
                    </div>
                </div>
            </div>
        );
    }
}
export default AllMovies;
