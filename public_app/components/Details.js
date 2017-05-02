import React from 'react';

class Details extends React.Component {
    render (){
        return (
            <div className="">
                <div>
                    <img src={this.props.src} alt={this.props.title} />
                </div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.imdbRating}
                </div>
                <div>
                    {this.props.released}
                </div>
                <div>
                    {this.props.genre}
                </div>
                <div>
                    {this.props.actors}
                </div>
            </div>
        );
    }
}
export default Details;
