import React from 'react'
import "./card.css"
const ImageCard = ({data}) => {
    return (
        <div className="imagecard-container" tabIndex={0} key={data.id}>
            <img className='imagecard-image' src={data.image_link} alt={data.title} />
        </div>
    )
}

export default ImageCard
