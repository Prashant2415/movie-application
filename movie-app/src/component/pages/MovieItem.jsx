import React from 'react'
import "./pages.css"
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatchlist } from '../../redux/movieSlice'
const MovieItem = () => {
  const location = useLocation();
  const item = location?.state
  const dispatch = useDispatch();
  const watchListData = useSelector((state)=> state.movieSlice.watchListData);

  const inWatchList = watchListData.some((i)=> i.id === item.id);
  const dummy = {
    "id": 1,
    "title": "Inception",
    "year": 2010,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "rating": 8.8,
    "director": "Christopher Nolan",
    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "plot": "A thief who enters the dreams of others to steal secrets is given a chance to have his past crimes forgiven.",
    "poster": "Inception",
    "trailer": "Inception",
    "runtime": 148,
    "awards": "Won 4 Oscars",
    "country": "USA",
    "language": "English",
    "boxOffice": "$836.8 million",
    "production": "Warner Bros.",
    "image_link": "https://handson-x-learn.s3.ap-south-1.amazonaws.com/MERN_SB_GP_Images/movie-ott-images/inception.jpg"
  }
  
  const {title, plot,year, genre, trailer, image_link, rating} = dummy;
  const handleAddToWatchlist=(data)=>{
    dispatch(addToWatchlist(data))
  }
  return (
    <div className='item-container'>
      <BorderedSubHeading>{title}</BorderedSubHeading>
      <div className="item-content-container">
        <div className="trailer-container">
          <video className='trailer-content' autoPlay muted loop>
            <source src={`./src/assets/movies/${trailer}.mp4#t=30`}/>
          </video>
        </div>
        <div className="movieitem-content-container">
          <img className='item-image' src={image_link} alt={title} />
          <div className="movieitem-content">
            <p className='item-year ptag-top'>{year}</p>
            <h2 className='item-title ptag-margin'>{title}</h2>
            <p className='item-genre ptag-top'>{genre.join("/")}</p>
            <p className='item-plot ptag-top'>{plot}</p>
            <div className="button-item-container">
            <p className='item-rating ptag-margin'>Rating <span className='rating'>{rating}</span>/10</p>
            <button className={`addtowatch ${inWatchList ? "button-disable" : ""}`} onClick={()=>{handleAddToWatchlist(item)}}>{inWatchList ? "Added to Watchlist" : "Add to watchlist"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="casting-container">

      </div>
    </div>
  )
}

export default MovieItem
