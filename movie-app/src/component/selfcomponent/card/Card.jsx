import React from 'react'
import "./card.css"
const Card = ({data}) => {
    return (
        <div className="card-container">
            <img className='card-image' src={data.image_link} alt={data.title} />
            <div className="card-content">
                <h2 className='ptag-bottom card-title'>{data.title}</h2>
                <p className='ptag-bottom card-genre'>{data.genre.join("/")}</p>
                <p className='card-plot'>{data.plot}</p>
                <div className="card-button-container">
                    <button className='card-button primary'>View</button>
                    <button className='card-button secondary'>Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}

export default Card
