import React from 'react'
import "./card.css"
import {useLocation} from "react-router-dom"
const Card = ({ data, onClickAddtoWatchlist, inWatchList, onClickRemoveFromWatchlist, onClickView }) => {

   const location = useLocation();
   const watchListPage = location.pathname === "/watchlist"

    return (
        <div className="card-container">
            <img className='card-image' src={data.image_link} alt={data.title} />
            <div className="card-content">
                <h2 className='ptag-bottom card-title'>{data.title}</h2>
                <p className='ptag-bottom card-genre'>{data.genre.join("/")}</p>
                <p className='card-plot'>{data.plot}</p>
                <div className="card-button-container">
                    <button className='card-button primary' onClick={()=>{onClickView(data)}}>View</button>
                    
                    {!watchListPage ? (
                        <button className={`card-button secondary ${inWatchList ? "button-disable" : ""}`} disabled={inWatchList} onClick={() => { onClickAddtoWatchlist(data) }}>{inWatchList ? "Added to watchlist" : "Add to Watchlist"}</button>
                    ) : (
                        <button className={`card-button ${watchListPage ? "remove-button-item" : ""}`} onClick={() => { onClickRemoveFromWatchlist(data) }}>Remove from Watchlist</button>
                    )}
                    
                    

                </div>
            </div>
        </div>
    )
}

export default Card
