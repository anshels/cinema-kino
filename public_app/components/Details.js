import React    from 'react';

class Details extends React.Component {
    render (){
        return (
            <div className="detail-container">
                <div className='detail-img'>
                    <img src={this.props.src} alt={this.props.title} />
                </div>
                <div clasName='description-container'>
                    <div className='detail-item'><span className='detail-bold'>Title: </span>
                        {this.props.title}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Imbd rating: </span>
                        {this.props.imdbRating}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Year: </span>
                        {this.props.released}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Genre: </span>
                        {this.props.genre}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Actors: </span>
                        {this.props.actors}
                    </div>
                    <div className="clear-float"></div>
                </div>
            </div>
        );
    }
}
export default Details;
