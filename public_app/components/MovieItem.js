import React from 'react';
var Link = require ('react-router-dom').Link;

import Carousel from 'nuka-carousel';

class MovieItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clickID: ''
        };
    }
    render (){
        return (
            <div>
                <Link to={'/movies-details/' + this.props.id}>
                        <img key={this.props.id} src={this.props.src}/>

                </Link>

            </div>
        )
    }
}
export default MovieItem;
