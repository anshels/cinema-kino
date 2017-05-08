import React        from 'react';
import {Link }      from 'react-router-dom';

class MovieItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clickID: ''
        };
    }
    render (){
        const {id, src} = this.props;
        return (
            <div className="movie-item">
                <Link to={'/movies-details/' + this.props.id}>
                        <img key={id} src={src}/>
                </Link>
            </div>
        );
    }
}
export default MovieItem;
