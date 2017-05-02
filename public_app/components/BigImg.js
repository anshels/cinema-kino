import React from 'react';
import Carousel from 'nuka-carousel';
import MovieItem from './MovieItem';
import axios from 'axios';
import { Link } from "react-router";



class BigImg extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            id: '',
            searchInput: '',
            searchResult: []
        };

        axios.get("api/movies").then((response) => {
            this.setState({
                items: response.data
            });
            console.log(response);
        });

    }

    render (){
        let searchTrue = this.state.searchInput;
        return (
            <div className="big-img-container">
                <div>Search Box
                    <input type="text" onChange={(event) =>{
                            this.setState({
                                searchInput : event.target.value
                            });

                        }}
                        />
                </div>

                <div>{this.state.searchInput}</div>
                {searchTrue ?
                    <div className='img-result'>
                            {this.state.items.filter((filt) =>{return filt.Title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) === 0 }).map((item) => {
                                return <MovieItem  id={item._id} src={item.Poster}/>;
                            } )}
                    </div>
                    :
                    <div className='big-img-small'>
                        <Carousel>
                            {this.state.items.map((item) => {
                                return <MovieItem key={item.Title} id={item._id} src={item.Poster}/>;
                            } )}
                        </Carousel>
                    </div>
                }

            </div>

        );
    }
}
export default BigImg;
