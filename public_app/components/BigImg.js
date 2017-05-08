import React        from 'react';
import Carousel     from 'nuka-carousel';
import axios        from 'axios';
import { Link }     from 'react-router-dom';
import MovieItem    from './MovieItem';
import {getMovies}  from '../services/getData';

class BigImg extends React.Component {
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
        const searchTrue = this.props.inputFieldValue;
        const {items} = this.state;
        return (
            <div className="big-img-container">
                {searchTrue ?
                    <div className='img-result'>
                        <div className="search-result-img">
                            {this.props.inputFieldValue.map((item) =>  <MovieItem key={item.Title} id={item._id} src={item.Poster}/>
                             )}
                        </div>
                    </div> :
                    <div className='carousel-container'>
                    <div className='big-img-small'>
                        <Carousel>
                            {items.map((item) =>  <MovieItem key={item.Title} id={item._id} src={item.Poster}/>
                             )}
                        </Carousel>
                    </div>
                </div>
                }

            </div>

        );
    }
}
export default BigImg;
