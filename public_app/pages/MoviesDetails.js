import React        from 'react';
import axios        from 'axios';
import {Link}       from 'react-router-dom';
import BigImg       from '../components/BigImg';
import Nav          from '../components/Nav';
import Details      from '../components/Details';
import LogOut       from '../components/LogOut';
import {getMoviesId, getComments}  from '../services/getData';

class MoviesDetails extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            item: {},
            chat: [],
            chatInput: {
                author: '',
                comment: ''
            }
        };
        getMoviesId(this.props.match.params.id, response => {
            this.setState({
                item: response.data
            });
        });
        getComments(this.props.match.params.id, response => {
            this.setState({
                chat: response.data
            });
        });
    }
    handleApi(){
         getComments(this.props.match.params.id, response => {
            this.setState({
                chat: response.data
            });
        });
    }
    handleClick(event){
        const comment = {
            movieId: this.props.match.params.id,
            user: this.state.chatInput.author,
            comment: this.state.chatInput.comment
        };
        axios.post(`/api/comment/${this.props.match.params.id}`, comment);

        this.setState({
            chatInput: {
                author: '',
                comment: ''
            }
        })
        this.handleApi()
    }
    render (){
        let item = this.state.item;

        return (
            <div>
                <Link to={'/login'}>
                    <LogOut />
                </Link>
                <div className='logo-header'>Cinema Star</div>
                <Nav />
                <div className='comment-container'>
                    <Details src={item.Poster} title={item.Title} imdbRating={item.imdbRating} released={item.Released} genre={item.Genre} actors={item.Actors} />
                    <div className='form-container'>
                        <div className='chat-area'>
                            {this.state.chat.map((comment) => <div>- {comment.user}: {comment.comment}</div>
                                                )}
                        </div>
                        <form>
                            <div>
                                <div>Username</div>
                                <input id='input-username' value={this.state.chatInput.author} type="text" placeholder='User' onChange={(event) =>{
                                        this.setState({
                                            chatInput: {
                                                author: event.target.value,
                                                comment: this.state.chatInput.comment
                                            }
                                        });
                                    }} />
                            </div>
                            <div>
                                <div>Comment</div>
                                <textarea id='input-textarea' value={this.state.chatInput.comment} type="text" placeholder='Comment' onChange={(event) =>{
                                        this.setState({
                                            chatInput: {
                                                author: this.state.chatInput.author,
                                                comment: event.target.value

                                            }
                                        });
                                    }} />
                            </div>
                        </form>
                    </div>
                    <button className='send-button' onClick={this.handleClick.bind(this)}>Send</button>
                </div>
            </div>
        );
    }
}
export default MoviesDetails;
