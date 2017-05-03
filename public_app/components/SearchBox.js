import React from 'react';
import axios from 'axios';


class SearchBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            id: '',
            searchInput: '',
            searchTitle: [],
            searchYear: []
        };
        this.handleSearch = this.handleSearch.bind(this);

        axios.get("api/movies").then((response) => {
            this.setState({
                items: response.data
            });
        });
    }
    handleSearch(value){
//        this.setState({
//            searchYear: this.state.items.filter((filt) =>{
//                return filt.Year + "" === this.state.searchInput
//            })
//        });
//        this.setState({
//            searchTitle: this.state.items.filter((filt) => {
//                return filt.Title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) === 0 })
//        } )
        const searchOutput = this.state.items.filter((filt) =>
            filt.Title.toLowerCase()
                .indexOf(value.toLowerCase()) === 0
        );
        this.props.inputValue(value === '' ? null : searchOutput);
    }

    render (){
        return (
            <div className="search-container">
                <div>
                    <input placeholder="Search" type="text" onChange={(event) =>{
                            this.handleSearch(event.target.value);
                        }}
                        />
                </div>

                <div>{this.state.searchYear.Title}</div>



            </div>

        );
    }
}
export default SearchBox;
