import React from 'react'
import "./pages.css"
import Carousel from '../selfcomponent/carousel/Carousel'
import { useSelector } from 'react-redux'
import ImageCard from '../selfcomponent/card/ImageCard'
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
import { useNavigate } from 'react-router'
const Home = () => {
  const movieData = useSelector((state) => state.movieSlice.movieData)
  const filterRatingData = movieData.filter((item) => item.rating > 8.5);
  const navigate = useNavigate();
  const handleAddToWatchlist=(movieItem)=>{
    navigate("/movieItem",{state: movieItem})
  }  
  return (
    <div className='home-container'>
      <Carousel data={movieData} timeInterval={10000} />
      <div className="most-rated-movie-container">
        <BorderedSubHeading>Top Rated Movies</BorderedSubHeading>
        <div className="rating-container">
          {filterRatingData.map((filteredData) => (
            <ImageCard data={filteredData} onClickAddToWatchlist={handleAddToWatchlist}/>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Home
