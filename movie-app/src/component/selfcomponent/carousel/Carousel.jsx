import React, { useEffect, useState } from 'react'
import "./carousel.css"
const Carousel = ({data,timeInterval}) => {
    const carouselData = data.slice(0,5)
    const [currentItem, setCurrentItem] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem((prevItem) => (prevItem + 1) % carouselData.length);
        }, timeInterval);

        return () => clearInterval(interval);
    }, []);

    const {title, genre, plot, rating, year} = carouselData[currentItem];
    return (
        <div className='carousel-container'>
            <div className="carousel-content-container">
                <p className='content-year p-top'>{year}</p>
                <h2 className='content-title p-top-bottom'>{title}</h2>
                <p className='content-genre'>{genre.join("/")}</p>
                <p className='content-plot p-top'>{plot}</p>
                <p className='content-rating p-top'>Rating: <span className='rating-span highlight'>{rating}</span>/10</p>
            </div>
            <div className="carousel-multimedia-container">
                {/* {carouselData.map((item) => (
                    <video className='carousel-multimedia' key={item.id} autoPlay muted>
                        <source src={`./src/assets/movies/${item.trailer}.mp4#t=30`} type='video/mp4' />
                    </video>
                ))} */}
                <video className='carousel-multimedia' autoPlay muted loop key={currentItem}>
                    <source src={`./src/assets/${carouselData[currentItem].trailer}.mp4#t=30`} type='video/mp4'/>
                </video>
            </div>
        </div>
    )
}

export default Carousel
