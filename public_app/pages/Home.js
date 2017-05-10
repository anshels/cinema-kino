import React        from 'react';
import {Link}       from 'react-router-dom';
import BigImg       from '../components/BigImg';
import Nav          from '../components/Nav';
import LogOut       from '../components/LogOut';
import SearchBox    from '../components/SearchBox';

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(value){
        this.setState ({
            inputValue: value
        });
    }
    render (){
        const { inputValue } =this.state;
        return (
            <div>
                <Link to={'/login'}>
                    <LogOut />
                </Link>
                <div className='logo-header'>Cinema Star</div>
                <Nav />
                <SearchBox inputValue={this.handleSearch}/>
                { inputValue ?
                    <h2 className="home-header">Search results :</h2>
                    :
                    <h2 className="home-header">Newest Movies in one place</h2>
                }
                <BigImg inputFieldValue={inputValue}/>
            </div>
        )
    }
}
export default Home;
