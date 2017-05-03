import React        from 'react';
import Nav          from '../components/Nav';
import LogOut       from '../components/LogOut';
import MovieItem    from '../components/MovieItem';
import axios        from 'axios';

var Link = require ('react-router-dom').Link;

class AllMovies extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: []
        };
        axios.get("api/movies").then((response) => {
            this.setState({
                items: response.data
            });
            console.log(response);
        });

    }
    render (){
        return (
            <div className="all-movies-container">
                <Link to={'/login'}>
                    <LogOut />
                </Link>
                <Nav />
                <div className="">
                    <div className='all-img-view'>
                        {this.state.items.map((item) => {
                            return <MovieItem key={item.Title} id={item._id} src={item.Poster}/>;
                        } )}
                    </div>
                </div>
            </div>
        );
    }
}
export default AllMovies;
