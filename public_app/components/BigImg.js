import React        from 'react';
import Carousel     from 'nuka-carousel';
import MovieItem    from './MovieItem';
import axios        from 'axios';
import { Link }     from "react-router";



class BigImg extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            id: '',
            searchInput: '',
            searchTitle: [],
            searchYear: []
        };


        axios.get("api/movies").then((response) => {
            this.setState({
                items: response.data
            });
        });

    }


    render (){
        let searchTrue = this.props.inputFieldValue;
        console.log(searchTrue);
        return (
            <div className="big-img-container">

                <div>{this.state.searchTitle.Title}</div>
                {searchTrue ?
                    <div className='img-result'>
                        <div className="search-result-img">
                            {this.props.inputFieldValue.map((item) => {
                                return <MovieItem key={item.Title} id={item._id} src={item.Poster}/>
                            } )}
                        </div>
                    </div>
                    :
                    <div className='carousel-container'>
                    <div className='big-img-small'>
                        <Carousel>
                            {this.state.items.map((item) => {
                                return <MovieItem key={item.Title} id={item._id} src={item.Poster}/>;
                            } )}
                        </Carousel>
                    </div>
                </div>
                }

            </div>

        );
    }
}
export default BigImg;
