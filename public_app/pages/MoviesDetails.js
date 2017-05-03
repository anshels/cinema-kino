import React    from 'react';
import BigImg   from '../components/BigImg';
import Nav      from '../components/Nav';
import Details  from '../components/Details';
import LogOut   from '../components/LogOut';
import axios    from 'axios';
var Link = require ('react-router-dom').Link;




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
        console.log(this.state);
        axios.get(`/api/movies/${this.props.match.params.id}`
                 ).then((response) => {
            this.setState({
                item: response.data
            });
        });
        axios.get(`/api/comment/${this.props.match.params.id}`
                 ).then((response) => {
            this.setState({
                chat: response.data
            });
        });
    }
    handleApi(){
        axios.get(`/api/comment/${this.props.match.params.id}`
                 ).then((response) => {
            this.setState({
                chat: response.data
            });
        });
    }
    handleClick(event){
        let comment = {
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
                <Nav />
                <div className='comment-container'>
                    <Details src={item.Poster} title={item.Title} imdbRating={item.imdbRating} released={item.Released} genre={item.Genre} actors={item.Actors} />
                    <div className='form-container'>
                        <div className='chat-area'>
                            {this.state.chat.map((comment) =>{
                                return <div>- {comment.user}: {comment.comment}</div>
                            })}
                            {console.log(this.state.chat)}
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
                                        console.log(this.state);
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
                                        console.log(this.state);
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
