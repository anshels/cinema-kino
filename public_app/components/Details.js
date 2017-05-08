import React    from 'react';

const Details = props => {
        return (
            <div className="detail-container">
                <div className='detail-img'>
                    <img src={props.src} alt={props.title} />
                </div>
                <div className='description-container'>
                    <div className='detail-item'><span className='detail-bold'>Title: </span>
                        {props.title}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Imbd rating: </span>
                        {props.imdbRating}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Year: </span>
                        {props.released}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Genre: </span>
                        {props.genre}
                    </div>
                    <div className='detail-item'>
                        <span className='detail-bold'>Actors: </span>
                        {props.actors}
                    </div>
                </div>
            </div>
        );

};
export default Details;
