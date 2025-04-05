import React from 'react'
import "./card.css"
const ImageCard = ({data,onClickAddToWatchlist}) => {
    return (
        <div className="imagecard-container" tabIndex={0} key={data.id} onClick={()=>{onClickAddToWatchlist(data)}}>
            <img className='imagecard-image' src={data.image_link} alt={data.title} />
            <p className='imagecard-title'>{data.title}</p>
        </div>
    )
}

export default ImageCard
