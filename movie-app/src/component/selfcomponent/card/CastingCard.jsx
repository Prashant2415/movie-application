import React from 'react'
import "./card.css"
const CastingCard = ({ data }) => {
    const getAvatar = (name) =>
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
    return (
        <div className="casting-content">
            <img className='casting-image' src={getAvatar(data)} alt={data} />
            <p className='casting-subtitle'>{data === "director" ? "Director" : "Actor"}</p>
            <p className='casting-title'>{data}</p>
        </div>
    )
}

export default CastingCard
